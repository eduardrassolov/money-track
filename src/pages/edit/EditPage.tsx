
import { useLoaderData, useNavigate } from "react-router-dom"
import Header from "../../ui/header/Header";
import { styled } from "styled-components";
import { ErrorP, Form, FormFooter, FormGroup } from "../../components/newTransaction/FormTransaction.style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../../types/Inputs.type";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import Category from "../../components/category/Category";
import { QUERY_KEY } from "../../config/queryClientKeys";
import { useQuery } from "@tanstack/react-query";
import getCategory from "../../services/api/getCategory";
import useEdit from "./useEdit";
import { queryClient } from "../../main";
import usePageBack from "../../utils/hooks/usePageBack";


const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default function EditPage() {
    const [data] = useLoaderData();
    if (!data) {
        return null;
    }
    const id = data.id;

    const { updateTransaction } = useEdit();
    const { goBack } = usePageBack();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const { data: optionsList } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES], queryFn: () => getCategory(data.category.type.id) });

    const onSubmit: SubmitHandler<Inputs> = ({ description, amount, completed_at, category }) => {
        if (!description.trim() || !amount || !completed_at || !category)
            return;

        updateTransaction(
            {
                description,
                amount: Number(amount),
                completed_at,
                category: Number(category),
                id
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: [id, data.category.type.id] });
                    goBack();
                }
            }
        );
    }

    return (
        <EditContainer>
            <Header text="Edit transaction" />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <label htmlFor="description">Description:</label>
                    {errors?.description ? <ErrorP>{errors.description?.message}</ErrorP> : ''}
                    <input type="text" id="description" placeholder='Enter description' autoFocus autoComplete="off"
                        {
                        ...register("description",
                            {
                                required: '*This field is required',
                            })} defaultValue={data.description} />
                </FormGroup>

                {optionsList
                    ?
                    <FormGroup>
                        <label htmlFor="category">Category:</label>
                        <Category options={optionsList} register={register} selected={data.category.id} />
                    </FormGroup>
                    : ''
                }

                <FormGroup>
                    <label htmlFor="amount">Amount:</label>
                    {errors?.amount ? <ErrorP>{errors.amount?.message}</ErrorP> : ''}
                    <input type="number" id="amount" step={0.01} min={1} placeholder='Enter amount' autoComplete='off' {...register("amount", {
                        required: '*This field is required',
                    })} defaultValue={data.amount} />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="completed_at">Date:</label>
                    <input type="datetime-local" id="completed_at"  {...register("completed_at", {
                        required: '*This field is required',
                    })} defaultValue={new Date(data.completed_at).toISOString().slice(0, 16)} />
                </FormGroup>

                <FormFooter>
                    <SecondaryBtn onClick={goBack}>Cancel</SecondaryBtn>
                    <PrimaryBtn type='submit'>Save</PrimaryBtn>
                </FormFooter>
            </Form>
        </EditContainer>
    )
}
