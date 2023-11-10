import { useMutation } from "@tanstack/react-query";

import apiCreateTransaction from "../../services/api/createTransaction";
import { toast } from "react-toastify";

export default function useCreateTransaction() {
    const { mutate: createTransaction } = useMutation({
        mutationFn: apiCreateTransaction,
        // onSuccess: () => toast.success("Added successfully"),
        onError: () => toast.error("Something went wrong"),
    });

    return { createTransaction };
}
