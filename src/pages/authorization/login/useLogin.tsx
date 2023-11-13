import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

import { ROUTES } from "../../../config/routes.ts";
import { apiLogin } from "../../../services/api/apiUser.ts";
import { TLogin } from "./login.type.ts";


export const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }: TLogin) => apiLogin({ email, password }),
        onSuccess: (user) => {
            console.log(user);
            queryClient.setQueryData(["user"], user.user);
            navigate(`${ROUTES.DASHBOARD}`)
        },

        onError: (error) => {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    });

    return { login, isLoading }
}