import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { ICategory } from "../../interface/ICategory";
import { Select } from "./Category.style";
import { Inputs } from "../../types/Inputs.type";

//TODO refactor
interface ICategoryComp {
    options: Array<ICategory>,
    register: UseFormRegister<Inputs>;
    selected?: string
}

const Category: FC<ICategoryComp> = ({ options, register, selected }) => {
    return (
        <Select id="category" {...register("category")} defaultValue={selected}>
            {options?.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
        </Select >
    )
}

export default Category;