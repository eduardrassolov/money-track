export interface ITransaction {
  id: number;
  description: string;
  amount: number;
  completedAt: Date;
  category: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
}
