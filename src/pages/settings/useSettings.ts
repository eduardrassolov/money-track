import { useMutation } from "@tanstack/react-query";
import updateUser from "../../services/updateUser";
import { toast } from "react-toastify";
import { InputsSettings } from "./Settings.page";

function useSettings() {
  const { mutate: mutateUser } = useMutation({
    mutationFn: (data: InputsSettings) => updateUser(data),
    onSuccess: () => {
      //   queryClient.invalidateQueries(["user"]);
      toast.success("User updated succesfully.");
    },
    onError: () => toast.error("Something went wrong, try again."),
  });

  return { mutateUser };
}
export default useSettings;
