export interface ITransactionCategory {
  id: string;
  isDefault: boolean;
  name: string;
  type_id: number;
  user_id: string | null;
}
