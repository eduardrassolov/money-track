import supabase from "../../../services/supabase";

export default async function updateSettingsData(userId, newData) {
    console.log(newData);
    try {
        const { data, error } = await supabase
            .from("Settings")
            .update({ ...newData })
            .eq("userId", userId)
            .select();

        if (error) {
            throw new Error(error.message);
        }

        console.log(data, error);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
}
