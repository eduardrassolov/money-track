export type GetAllTransactionsDTO = {
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
  description: string;
  id: number;
  };
};
