import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { login as loginApi } from "../../services/api/apiUser";

import { toast } from "react-toastify";
import { useEffect } from "react";
import supabase from "../../services/supabase";
import { ROUTES } from "../../config/routes";

export interface ILogin {
    email: string,
    password: string
}

export const useLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();

            if (user && !error) {
                navigate(`${ROUTES.EXPENSES}?page=1`);
            }
        }

        checkAuth();
    }, [])

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }: ILogin) => loginApi({ email, password }),
        onSuccess: () => navigate(`${ROUTES.EXPENSES}?page=1`),
        onError: () => toast.error("Wrong email or password!")
    })

    return { login, isLoading }
}