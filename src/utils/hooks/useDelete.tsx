import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiDeleteTransaction from "../../services/api/deleteTransaction";
import { toast } from "react-toastify";

export default function useDelete(listType: string) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: apiDeleteTransaction,
        onSuccess: () => {
            toast.success('Successfully deleted.');
            queryClient.invalidateQueries({ queryKey: [listType] });
        }
    });
    const deleteTransaction = (id: number) => {
        mutation.mutate(id);
    }

    return { deleteTransaction }

}