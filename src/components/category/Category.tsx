import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { ICategory } from "../../interface/ICategory";
import { Select } from "./Category.style";
import { Inputs } from "../../types/Inputs.type";

//TODO refactor
interface ICategoryComp {
    options: Array<ICategory>,
    register: UseFormRegister<Inputs>;
}

const Category: FC<ICategoryComp> = ({ options, register }) => {
    return (
        <Select id="category" {...register("category")}>
            {options?.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
        </Select >
    )
}

export default Category;