import { styled } from "styled-components"
import { ITransaction } from "../../interface/ITransactions";
import TransactionForm from "../newTransaction/FormTransaction";
import { ErrorP, Form, FormGroup } from "../newTransaction/FormTransaction.style";
import { useForm } from "react-hook-form";
import { Inputs } from "../../types/Inputs.type";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../config/queryClientKeys";
import getCategory from "../../services/api/getCategory";

const Modal = styled.div<{ $isOpen: boolean }>`
    display: ${(props) => props.$isOpen ? 'flex' : 'none'};
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    flex-direction: column;
`

const HeaderModal = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    height: fit-content;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
`

type EditWindowProps = {
    isOpen: boolean;
    onClose: () => void;
    transaction: ITransaction;
    type: number;
}

export default function EditWindow({ isOpen = false, onClose, type, transaction }: EditWindowProps) {
    const { data: optionsList } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES], queryFn: () => getCategory(type) });

    function handleClose() {
        onClose();
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    return (
        <>
            <Modal $isOpen={isOpen}>
                <HeaderModal>
                    <span>Edit</span>
                    <button onClick={handleClose}>X</button>
                </HeaderModal>

                <Form>
                    <FormGroup>
                        <label htmlFor="description">Description:</label>
                        {errors?.description ? <ErrorP>{errors.description?.message}</ErrorP> : ''}

                        <input type="text" id="description" placeholder='Enter description' autoFocus autoComplete="off" {...register("description", {
                            required: '*This field is required',
                        })} />
                    </FormGroup>
                </Form>
            </Modal>
        </>

    )
}
