import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/getUser";
import { formatDate } from "../helpers/formatDate";
import { useEffect, useState } from "react";

export function useUser() {
    const { isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });

    const created = formatDate(user?.created_at as string);
    const [lastUpd, setLastUpd] = useState<string>('');

    useEffect(() => {
        const updateDate = () => setLastUpd(() => formatDate(user?.updated_at as string));
        updateDate();
    }, [user?.updated_at])

    return { isLoading, user, firstName: user?.user_metadata.firstName, lastName: user?.user_metadata.lastName, created, currency: user?.user_metadata.currency, lastUpd, isAuthenticated: user?.role === "authenticated" };
}