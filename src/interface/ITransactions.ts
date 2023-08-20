export interface ITransaction {
  id: number;
  description: string;
  amount: number;
  completedAt: Date;
  typeTransaction: {
    id: number;
    name: string;
  } | null;
}
