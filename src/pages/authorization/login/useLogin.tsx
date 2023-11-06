import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useEffect } from "react";

import { ROUTES } from "../../../config/routes.ts";
import supabase from "../../../services/supabase.ts";
import { apiLogin } from "../../../services/api/apiUser.ts";
import { TLogin } from "./login.type.ts";


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
        mutationFn: ({ email, password }: TLogin) => apiLogin({ email, password }),
        onSuccess: () => navigate(`${ROUTES.EXPENSES}?page=1`),
        onError: () => toast.error("Wrong email or password!")
    })

    return { login, isLoading }
}