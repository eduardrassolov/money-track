export type GetAllTransactionsDTO = {
  id: number;
  description: string;
  amount: number;
  category: {
    id: number;
    name: string;
    type: {
      id: number;
      name: string;
    };
  };
  completed_at: string;
  profile_id: string;
};
