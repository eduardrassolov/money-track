import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { login as loginApi } from "../../services/api/apiLogin";
import { ROUTES } from "../../router";
import { toast } from "react-toastify";

export const useLogin = () => {
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: () => navigate(ROUTES.DASHBOARD),
        onError: () => toast.error("Wrong email or password!")
    })

    return { login, isLoading }
}