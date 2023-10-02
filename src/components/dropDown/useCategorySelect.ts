import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import apiCreateCategory from "../../services/api/apiCreateCategory";
import apiDeleteCategory from "../../services/api/apiDeleteCategory";

function useCategorySelect() {
  const [isCreateMode, setCreateMode] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const changeCategoryName = (value: string) => setCategoryName(value);
  const openCloseCreateMode = () => setCreateMode((prev) => !prev);

  function clear() {
    setCategoryName("");
    setCreateMode(false);
  }

  const { mutate: addCategory } = useMutation({
    mutationFn: apiCreateCategory,
    onSuccess: () => clear(),
  });

  const { mutate: deleteCategory } = useMutation({ mutationFn: apiDeleteCategory });

  return { clear, isCreateMode, categoryName, changeCategoryName, openCloseCreateMode, addCategory, deleteCategory };
}

export default useCategorySelect;
