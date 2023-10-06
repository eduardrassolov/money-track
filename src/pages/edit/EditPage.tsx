import { useLoaderData, useNavigate } from "react-router-dom"
import Header from "../../ui/header/Header";
import { ErrorP, FormFooter, FormGroup } from "../../components/newTransaction/FormTransaction.style";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import { QUERY_KEY } from "../../config/queryClientKeys";
import { useQuery } from "@tanstack/react-query";
import { apiGetCategories, apiGetUserCategory } from "../../services/api/apiGetCategory";
import useEdit from "./useEdit";
import { queryClient } from "../../main";
import { GetAllTransactionsDTO } from "../../services/api/dto/getTransactions.dto";
import Input from "../../components/input/Input";
import { Container, SectionFull } from "../settings/Settings.page";
import { yupResolver } from "@hookform/resolvers/yup";
import { newTransactionSchema } from "../../components/newTransaction/newTrasactionValidation";
import DropDown from "../../components/dropDown/DropDown";
import { useUser } from "../../utils/hooks/useUser";
import { useState } from "react";
import { format } from "date-fns";
import Select from "../../components/dropDown/Select";
import apiGetCurrency from "../../services/api/apiGetCurrency";

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

    console.log(data);
    const userCurrency = user.user_metadata.currency as string;
    const { data: defaultCategory } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES, data.Category.type.id], queryFn: () => apiGetCategories(data.Category.type.id) });
    const { data: userCategories } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES, data.Category.type.id, user.id], queryFn: () => apiGetUserCategory(data.Category.type.id, user.id) });
    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });

    const [updatedCategory, setCategory] = useState(data.Category.id);
    const changeTempCategory = (categoryId: string) => setCategory(() => categoryId);

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(2),
            defaultValues: {
                description: data.description,
                amount: data.amount,
                completed_at: format(new Date(data.completed_at), "yyyy-MM-dd HH:mm"),
                currency: data.currency_id
            }
        });

    //TODO fix any
    const onSubmit: SubmitHandler<any> = async ({ description, amount, completed_at, currrency }) => {
        if (!description.trim() || !amount || !completed_at || currrency)
            return;

        updateTransaction({
            description,
            amount,
            completed_at: completed_at,
            category: updatedCategory,
            id,
            currrency_id: currrency
        }, { onSuccess: () => queryClient.invalidateQueries({ queryKey: [id, data.Category.type.id] }) })
    }
    const handleCancel = () => navigate(-1);



    return (
        <SectionFull>
            <Container>
                <Header text="Edit transaction" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <label htmlFor="description">Description:</label>
                        <Input register={register} type={"text"} placeHolder={"Enter description"} name={"description"} />
                        <ErrorP>{errors?.description?.message}</ErrorP>
                    </FormGroup>

                    {defaultCategory
                        ?
                        <FormGroup>
                            <label htmlFor="category">Category:</label>
                            <DropDown defaultOption={defaultCategory} customOption={userCategories} selected={updatedCategory} onSelect={changeTempCategory} currentTypeTransaction={1} />
                            <ErrorP></ErrorP>
                        </FormGroup>
                        : ''
                    }

                    <FormGroup>
                        <label htmlFor="amount">Amount:</label>
                        <Input type={"number"} register={register} placeHolder={"0,00"} name={"amount"} />
                        <ErrorP>{errors?.amount?.message}</ErrorP>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="completed_at">Date:</label>
                        <Input type={"datetime-local"} register={register} name={"completed_at"} />
                        <ErrorP>{errors?.completed_at?.message}</ErrorP>
                    </FormGroup>

                    <FormGroup>
                        <Select options={optionCurrency} register={register} name={"currency"} selectedDefault={userCurrency}></Select>
                        <ErrorP></ErrorP>
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
