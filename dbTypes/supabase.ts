export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          id: number;
          name: string;
          type_id: number;
        };
        Insert: {
          id?: never;
          name: string;
          type_id: number;
        };
        Update: {
          id?: never;
          name?: string;
          type_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "category_type_id_fkey";
            columns: ["type_id"];
            referencedRelation: "type_transaction";
            referencedColumns: ["id"];
          },
        ];
      };
      Currency: {
        Row: {
          id: string;
          name: string;
          shortName: string | null;
          symbol: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          shortName?: string | null;
          symbol?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          shortName?: string | null;
          symbol?: string | null;
        };
        Relationships: [];
      };
      transactions: {
        Row: {
          amount: number;
          category_id: number;
          completed_at: string;
          currency_id: string;
          description: string;
          id: number;
          profile_id: string;
        };
        Insert: {
          amount: number;
          category_id: number;
          completed_at: string;
          currency_id: string;
          description: string;
          id?: number;
          profile_id: string;
        };
        Update: {
          amount?: number;
          category_id?: number;
          completed_at?: string;
          currency_id?: string;
          description?: string;
          id?: number;
          profile_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "transactions_category_id_fkey";
            columns: ["category_id"];
            referencedRelation: "category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "transactions_currency_id_fkey";
            columns: ["currency_id"];
            referencedRelation: "Currency";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "transactions_profile_id_fkey";
            columns: ["profile_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      type_transaction: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
