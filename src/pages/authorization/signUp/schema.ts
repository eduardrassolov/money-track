import * as yup from "yup";

export const signUpSchema = yup.object({
  email: yup.string().email("Email is not valid").required("This field is required"),
  password: yup.string().min(6, "Min password length 6 characters").required("This field is required"),
  repeatPass: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("This field is required"),
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
});
