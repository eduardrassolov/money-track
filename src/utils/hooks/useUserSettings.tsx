import { useQuery } from "@tanstack/react-query";
import { apiGetUserSettings } from "../../services/api/apiGetUserSettings";

export function useUserSettings(userId: string) {
    const { data: userSettings, isLoading } = useQuery({
        queryKey: ["userSettings"],
        queryFn: () => apiGetUserSettings(userId)
    });

    return { isLoading, userSettings }
}