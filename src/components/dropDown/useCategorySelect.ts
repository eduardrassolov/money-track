import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import apiCreateCategory from "../../services/api/apiCreateCategory";
import apiDeleteCategory from "../../services/api/apiDeleteCategory";

function useCategorySelect() {
    const [isCreateMode, setCreateMode] = useState(false);
    const [categoryName, setCategoryName] = useState("");

    const changeCategoryName = (value) => setCategoryName(value);
    const openCloseCreateMode = () => setCreateMode(prev => !prev);

    function clear(){
        setCreateMode(false);
        setCategoryName("");    
    }

    const {mutate: addCategory} = useMutation({
        mutationFn: apiCreateCategory,
        onSuccess: () => clear(),
        onError: () => console.log("Error")
    
    })

    const {mutate: deleteCategory} = useMutation({
        mutationFn: apiDeleteCategory,
    })


    return {clear, isCreateMode, categoryName, changeCategoryName, openCloseCreateMode, addCategory, deleteCategory}
}

export default useCategorySelect
