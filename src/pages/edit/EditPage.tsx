import { useLoaderData, useNavigate } from "react-router-dom"
import { FormFooter, FormGroup } from "../../components/newTransaction/FormTransaction.style";
import { SubmitHandler, useForm } from "react-hook-form";
import { QUERY_KEY } from "../../config/queryClientKeys";
import { useQuery } from "@tanstack/react-query";
import { apiGetCategories, apiGetUserCategory } from "../../services/api/apiGetCategory";
import useEdit from "./useEdit";
import { queryClient } from "../../main";
import { GetAllTransactionsDTO } from "../../services/api/dto/getTransactions.dto";
import Input from "../../components/input/Input";
import { Container, SectionFull } from "../settings/Settings.page";
import { yupResolver } from "@hookform/resolvers/yup";
import DropDown from "../../components/dropDown/DropDown";
import { useUser } from "../../utils/hooks/useUser";
import React, { useState } from "react";
import { format } from "date-fns";
import { StyledSelect } from "../../components/dropDown/Select";
import apiGetCurrency from "../../services/api/apiGetCurrency";
import { newTransactionSchema } from "../../components/newTransaction/newTrasactionValidation";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button.style";
import ErrorLabel from "../../components/error/ErrorLabel";
import { Header } from "../../ui/header/Header";
import dayjs from "dayjs";

export default function EditPage() {
    const [data] = useLoaderData() as Array<GetAllTransactionsDTO>;
    const { updateTransaction } = useEdit();

    if (!data) {
        return null;
    }
    const { id } = data;
    const navigate = useNavigate();
    const { user } = useUser();
    if (!user) {
        return null;
    }

    const { data: defaultCategory } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES, data.Category.type.id], queryFn: () => apiGetCategories(data.Category.type.id) });
    const { data: userCategories } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES, data.Category.type.id, user.id], queryFn: () => apiGetUserCategory(data.Category.type.id, user.id) });
    const { data: optionCurrency } = useQuery({ queryKey: [QUERY_KEY.CURRENCY], queryFn: apiGetCurrency });

    const [updatedCategory, setCategory] = useState(data.Category.id);
    const changeTempCategory = (categoryId: string) => setCategory(() => categoryId);

    const [updatedCurrency, setCurrency] = useState(data.currency.id);

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(newTransactionSchema),
            defaultValues: {
                description: data.description,
                amount: data.amount,
                completed_at: format(new Date(data.completed_at), "yyyy-MM-dd HH:mm"),
            }
        });

    //TODO fix any
    const onSubmit: SubmitHandler<any> = async ({ description, amount, completed_at, currency }) => {

        console.log(currency);
        console.log("curr", updatedCurrency);
        if (!description.trim() || !amount || !completed_at || !updatedCurrency)
            return;

        const formattedDate = dayjs(new Date(completed_at)).format("DD-MMM-YYYY HH:mm")

        updateTransaction({
            description,
            amount,
            completed_at: formattedDate,
            category: updatedCategory,
            id,
            currency_id: updatedCurrency
        }, { onSuccess: () => queryClient.invalidateQueries({ queryKey: [id, data.Category.type.id] }) })
    }
    const handleCancel = () => navigate(-1);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrency(e.target.value);

    return (
        <SectionFull>
            <Container>
                <Header text="Edit transaction" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <label htmlFor="description">Description:</label>
                        <Input register={register} type={"text"} placeHolder={"Enter description"} name={"description"} />

                        <ErrorLabel errMsg={errors?.description?.message} />
                    </FormGroup>

                    {defaultCategory
                        ?
                        <FormGroup>
                            <label htmlFor="category">Category:</label>
                            <DropDown defaultOption={defaultCategory} customOption={userCategories} selected={updatedCategory} onSelect={changeTempCategory} currentTypeTransaction={1} />

                            <ErrorLabel />
                        </FormGroup>
                        : ''
                    }

                    <FormGroup>
                        <label htmlFor="amount">Amount:</label>
                        <Input type={"number"} register={register} placeHolder={"0,00"} name={"amount"} />

                        <ErrorLabel errMsg={errors?.amount?.message} />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="completed_at">Date:</label>
                        <Input type={"datetime-local"} register={register} name={"completed_at"} />

                        <ErrorLabel errMsg={errors?.completed_at?.message} />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="currency">Currency:</label>
                        <StyledSelect value={updatedCurrency} onChange={handleSelect}>
                            {optionCurrency?.map(currency => (
                                <option key={currency.id} value={currency.id}>{currency.name}</option>
                            ))}
                        </StyledSelect>

                        <ErrorLabel />
                    </FormGroup>

                    <FormFooter>
                        <SecondaryBtn type="button" onClick={handleCancel}>Cancel</SecondaryBtn>
                        <PrimaryBtn type='submit'>Save</PrimaryBtn>
                    </FormFooter>
                </form>
            </Container>
        </SectionFull >
    )
}
