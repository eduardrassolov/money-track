import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import updateUser from "./service/updateUser";
import updateSettingsData from "./service/updateSettings";
import { InputsProfile } from "./tabs/profileSettingsTab/ProfileTab";
import { AppSettingsInputs } from "./tabs/appSettingsTab/ApplicationTab";

type UpdateSettingsProps = {
    userId: string;
    newData: AppSettingsInputs;
};

export default function useSettings() {
    const queryClient = useQueryClient();

    const { mutate: updateUserData } = useMutation({
        mutationFn: ({ firstName, lastName }: InputsProfile) => updateUser(firstName, lastName),
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
            toast.success("User updated succesfully.");
        },
        onError: () => toast.error("Something went wrong, try again."),
    });

    const { mutate: updateSettings } = useMutation({
        mutationFn: ({ userId, newData }: UpdateSettingsProps) => updateSettingsData(userId, newData),
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
            toast.success("Settings updated succesfully.");
        },
    });

    return { updateUserData, updateSettings };
}
