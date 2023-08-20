export type TransactionDTO = {
  id: number;
  amount: number;
  completed_at: string;
  description: string;
  type_transaction: {
    id: number;
    name: string;
  } | null;
};
