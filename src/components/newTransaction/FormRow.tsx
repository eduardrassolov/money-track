import { FC } from "react"
import { FormGroup } from "./FormTransaction.style"

interface IFormRow {
    children: React.ReactNode,
    lblFor: string,
    lblText: string
}

const FormRow: FC<IFormRow> = ({ children, lblFor, lblText }) => {
    return (
        <FormGroup>
            <label htmlFor={lblFor}>{lblText}:</label>
            {children}
        </FormGroup>
    )
}
export default FormRow
