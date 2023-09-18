import { useLoaderData, useNavigate } from "react-router-dom"
import Header from "../../ui/header/Header";
import { ErrorP, FormFooter, FormGroup } from "../../components/newTransaction/FormTransaction.style";
import { SubmitHandler, useForm } from "react-hook-form";
// import { Inputs } from "../../types/Inputs.type";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import { QUERY_KEY } from "../../config/queryClientKeys";
import { useQuery } from "@tanstack/react-query";
import getCategory from "../../services/api/apiGetCategory";
import useEdit from "./useEdit";
import { queryClient } from "../../main";
import usePageBack from "../../utils/hooks/usePageBack";
import { GetAllTransactionsDTO } from "../../services/api/dto/getTransactions.dto";
import Input from "../../components/input/Input";
import Select from "../../components/dropDown/Select";
import { Container, SectionFull } from "../settings/Settings.page";
import { yupResolver } from "@hookform/resolvers/yup";
import { newTransactionSchema } from "../../components/newTransaction/newTrasactionValidation";

export default function EditPage() {
    const [data] = useLoaderData() as Array<GetAllTransactionsDTO>;
    const { updateTransaction } = useEdit();
    if (!data) {
        return null;
    }
    const { id } = data;
    const navigate = useNavigate();

    const { data: optionsList } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES], queryFn: () => getCategory(data.category.type.id) });

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(newTransactionSchema),
            defaultValues: {
                description: data.description,
                amount: data.amount,
                completed_at: data.completed_at,
            }
        });
    
    //TODO fix any
    const onSubmit: SubmitHandler<any> = async ({ description, amount, completed_at, category }) => {
        if (!description.trim() || !amount || !completed_at || !category)
            return;


        updateTransaction({
            description, amount, completed_at: completed_at, category, id
        }, { onSuccess: () => queryClient.invalidateQueries({ queryKey: [id, data.category.type.id] }) })
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

                    {optionsList
                        ?
                        <FormGroup>
                            <label htmlFor="category">Category:</label>
                            <Select options={optionsList} name={"category"} register={register} selectedDefault={data.category.id.toString()}></Select>
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

                    <FormFooter>
                        <SecondaryBtn type="button" onClick={handleCancel}>Cancel</SecondaryBtn>
                        <PrimaryBtn type='submit'>Save</PrimaryBtn>
                    </FormFooter>
                </form>
            </Container>
        </SectionFull>
    )
}
