import { FC } from "react";
import { styled } from "styled-components";
import { ICategory } from "../../interface/ICategory";
import { InputsSettings } from "../../pages/settings/Settings.page";

export const StyledSelect = styled.select`
  width: 200px;
  padding: 0.7rem 1rem;
  background: ${(props) => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  color: ${(props) => props.theme.text};
  border-radius: 7px;
  width: 100%;
  transition: all 300ms;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    background-color: ${(props) => props.theme.background};
    transition: all 300ms ease -in -out;
    outline: none;
    border: 1px solid #3b82f6;
  }
`;

type Option = {
    id: string,
    name: string
}

interface ISelect {
    options: Array<Option | ICategory | InputsSettings>,
    register?: any,
    name: string,
    selectedDefault?: string,
    isDisabled?: boolean
}

const Select: FC<ISelect> = ({ options, register, name, selectedDefault, isDisabled = false }) => {
    console.log(selectedDefault);
    return (
        <StyledSelect {...register(name)} value={selectedDefault} disabled={isDisabled}>
            {
                options?.map((item) => <option key={item.id} value={item.id} >{item.name}</option>)
            }
        </StyledSelect>
    )
}
export default Select;