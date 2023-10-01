export default interface IInsertTransaction {
  description: string;
  amount: number;
  completedAt: string;
  categoryId: string;
  profileId: string;
  currencyId: string;
}
