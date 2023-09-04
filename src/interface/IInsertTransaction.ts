export default interface IInsertTransaction {
  description: string;
  amount: number;
  completedAt: string;
  categoryId: number;
  profileId: string;
}
