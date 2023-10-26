import * as yup from "yup";

interface IValidation {
  description: string;
  amount: number;
  categoryId: string;
}

export const transactionSchema: yup.ObjectSchema<IValidation> = yup
  .object()
  .shape({
    description: yup.string().required("Description is required."),
    amount: yup.number().required("Amount is required").positive("Amount must be positive."),
    categoryId: yup.string().required("Choose category"),
  })
  .required();
