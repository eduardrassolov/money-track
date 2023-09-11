import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiCreateTransaction from "../../services/api/createTransaction";
import { toast } from "react-toastify";
import { useUser } from "../../utils/hooks/useUser";
import useFilter from "../../utils/hooks/useFilter";
import useSort from "../../utils/hooks/useSort";
import { SortBy } from "../../types/sortBy.type";

export default function useCreateTransaction() {
  const { mutate: createTransaction } = useMutation({
    mutationFn: apiCreateTransaction,
    onSuccess: () => toast.success("Added successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  return { createTransaction };
}
