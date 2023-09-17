import { useMutation } from "@tanstack/react-query";
import apiUpdateTransaction from "../../services/api/apiUpdateTransaction";
import { toast } from "react-toastify";
import usePageBack from "../../utils/hooks/usePageBack";

export default function useEdit() {
    const { goBack } = usePageBack();

    const { mutate: updateTransaction } = useMutation({
        mutationFn: apiUpdateTransaction,
        onSuccess: () => {
            toast.success("Transaction updated successfully.")
            goBack();
        },
        onError: () => toast.error("Something went wrong.")
    })

    return { updateTransaction }
}