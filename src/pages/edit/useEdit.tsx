import { useMutation } from "@tanstack/react-query";
import apiUpdateTransaction from "../../services/api/apiUpdateTransaction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useEdit() {
    const navigate = useNavigate()

    const { mutate: updateTransaction } = useMutation({
        mutationFn: apiUpdateTransaction,
        onSuccess: () => {
            toast.success("Transaction updated successfully.")
            navigate(-1);
        },
        onError: () => toast.error("Something went wrong.")
    })

    return { updateTransaction }
}