export type InsertTransaction = {
  amount: number;
  completed_at?: string;
  description: string;
  type_id: number;
  user_id: number;
};
