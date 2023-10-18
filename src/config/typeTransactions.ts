import { ITypesTransaction } from "../interface/ITypesTransaction";

const TYPES_TRANSACTION: ITypesTransaction = {
  EXPENSE: 1,
  INCOME: 2,
} as const;

export default TYPES_TRANSACTION;
