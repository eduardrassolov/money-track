import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/getUser";

export function useUser() {
    const { isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });

    return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}