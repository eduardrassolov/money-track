import * as yup from "yup";
import getMaxDate from "../../utils/helpers/getMaxDate";

interface IValidation {
  description: string;
  amount: number;
  completed_at: Date | string;
}

export const newTransactionSchema: yup.ObjectSchema<IValidation> = yup
  .object()
  .shape({
    description: yup.string().required("Description is required."),
    amount: yup.number().required().positive("Amount must be positive."),
    completed_at: yup.date().required("Date is required.").max(getMaxDate(), "Date must not be in the future"),
  })
  .required();
