import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiDeleteTransaction from "../../services/api/deleteTransaction";
import { toast } from "react-toastify";

export default function useDelete() {
  const { mutate: deleteTr } = useMutation({
    mutationFn: apiDeleteTransaction,
    onSuccess: () => {
      toast.success("Successfully deleted.");
      // queryClient.invalidateQueries({ queryKey: [listType] });
    },
    onError: () => toast.error("Something went wrong."),
  });

  const deleteTransaction = (id: number) => deleteTr(id);

  return { deleteTransaction };
}
