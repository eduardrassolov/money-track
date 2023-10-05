import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { login as loginApi } from "../../services/api/apiUser";
import { ROUTES } from "../../router";
import { toast } from "react-toastify";

export interface ILogin {
    email: string,
    password: string
}

export const useLogin = () => {
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }: ILogin) => loginApi({ email, password }),
        onSuccess: () => {
            toast.success("Welcome");
            navigate(ROUTES.DASHBOARD)
        },
        onError: () => toast.error("Wrong email or password!")
    })

    return { login, isLoading }
}