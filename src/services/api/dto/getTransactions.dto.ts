export type GetAllTransactionsDTO = {
  id: number;
  description: string;
  amount: number;
  Category: {
    id: string;
    name: string;
    type: {
      id: number;
      name: string;
    };
  };
  completed_at: string;
  profile_id: string;
  currency_id: string;
};
