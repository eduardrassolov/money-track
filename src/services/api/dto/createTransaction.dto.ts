export interface ICreateTransactionDTO {
  amount: number;
  category_id: string;
  completed_at: string;
  description: string;
  id?: number;
  profile_id: string;
  currency_id: string;
}
