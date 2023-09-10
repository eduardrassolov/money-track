import { FC, HTMLInputTypeAttribute } from "react"
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../types/Inputs.type";
import { styled } from "styled-components";

const StyledInput = styled.input`
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

interface IInput {
    type: HTMLInputTypeAttribute,
    id?: string,
    placeHolder?: string,
    name: "description" | "amount" | "completed_at",
    register: UseFormRegister<Inputs>,
    autoFocus?: boolean
}

const Input: FC<IInput> = ({ type = "text", id, placeHolder, name, register, autoFocus = false }) => {
    return (
        <>
            {type === "number" ?
                <StyledInput
                    type={type}
                    id={id}
                    placeholder={placeHolder}
                    {...register(name)}
                    autoFocus={autoFocus}
                    min={type === "number" ? "1" : ""}
                    step={type === "number" ? '0.01' : ""} />
                :
                <StyledInput
                    type={type}
                    id={id}
                    placeholder={placeHolder}
                    {...register(name)}
                    autoFocus={autoFocus} />
            }
        </>
    )
}

export default Input;