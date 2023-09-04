export interface ICreateTransactionDTO {
  amount: number;
  category_id: number;
  completed_at: string;
  description: string;
  id?: number;
  profile_id: string;
}
