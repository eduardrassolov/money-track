import { useMutation } from "@tanstack/react-query";
import apiUpdateTransaction from "../../services/api/apiUpdateTransaction";
import { toast } from "react-toastify";

export default function useEdit() {
    const { mutate: updateTransaction } = useMutation({
        mutationFn: apiUpdateTransaction,
        onSuccess: () => toast.success("Successfully updated.")
    })

    return { updateTransaction }
}