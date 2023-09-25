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
  profileId: string;
  currency: {
    id: string;
    name: string;
    shortName: string | null;
    symbol: string | null;
    code?: number | null | undefined;
  };
}
