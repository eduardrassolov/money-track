
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Div, IconButton } from './Operations.style'

interface IOperations {
    transactionId: number,
    onDelete: (transactionId: number) => void,
    onEdit: (transactionId: number) => void
}

export default function Operations({ transactionId, onDelete, onEdit }: IOperations) {
    return (
        <Div>
            <IconButton onClick={() => onEdit(transactionId)}>
                <AiOutlineEdit size={"1rem"} />
                <span>edit</span>
            </IconButton>

            <IconButton onClick={() => onDelete(transactionId)}>
                <AiOutlineDelete size={"1rem"} />
                <span>delete</span>
            </IconButton>
        </Div>
    )
}
