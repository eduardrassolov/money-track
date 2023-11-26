import { FC, HTMLInputTypeAttribute } from "react"
import { styled } from "styled-components";

export const StyledInput = styled.input`
    font-size: 1rem;
    padding: 0.7rem 1rem;
    border-radius: 7px;
    background: ${(props) => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    color: ${(props) => props.theme.text};
    transition: all 300ms;

    &:focus {
        outline: none;
        border: 1px solid #0284c7;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: all 0.3s ease-in-out;
    }
`

export const SearchInput = styled(StyledInput)`
    display: flex;
    box-sizing: border-box;
    margin: 0;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
`

interface IInput {
    type: HTMLInputTypeAttribute,
    id?: string,
    placeHolder?: string,
    name: "description" | "amount" | "completed_at" | "firstName" | "lastName" | "email" | "password" | "repeatPass" | "numberPerPage",
    // register: UseFormRegister<Inputs> | UseFormRegister<SignInInputs> | UseFormRegister<InputsSettings> | UseFormRegister<ILoginInputs>,
    register: any,
    autoFocus?: boolean,
    defaultValue?: string
}

const Input: FC<IInput> = ({ type = "text", id, placeHolder, name, register, autoFocus = false, defaultValue }) => {
    return (
        <>
            {type === "number" ?
                <StyledInput
                    type={type}
                    id={id}
                    placeholder={placeHolder}
                    {...register(name)}
                    autoFocus={autoFocus}
                    defaultValue={defaultValue}
                    min={type === "number" ? "1" : ""}
                    step={type === "number" ? '1' : ""} />
                :
                <StyledInput
                    type={type}
                    id={id}
                    placeholder={placeHolder}
                    {...register(name)}
                    autoFocus={autoFocus}
                    defaultValue={defaultValue}
                />

            }
        </>
    )
}

export default Input;