import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/getUser";

export function useUser() {
    const { isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });

    console.log(isLoading, user);
    return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}