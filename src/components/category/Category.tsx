import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

import { styled } from "styled-components";
import { Inputs } from "../newTransaction/FormTransaction";

const Select = styled.select`
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 7px;
    border: 1px solid #ccc;        
    background: #f4f4f4;

    &:focus{
        outline: none; 
        border: 1px solid #0284c7;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
    }
`

//TODO refactor
interface ICategory {
    options: Array<IExpensesCategory>,
    register: UseFormRegister<Inputs>;
}

const Category: FC<ICategory> = ({ options, register }) => {
    return (
        <Select id="category" {...register("category")}>
            {options.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
        </Select >
    )
}

export default Category;