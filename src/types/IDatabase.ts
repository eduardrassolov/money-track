export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Category: {
        Row: {
          id: string
          isDefault: boolean
          name: string
          type_id: number
          user_id: string | null
        }
        Insert: {
          id?: string
          isDefault?: boolean
          name: string
          type_id: number
          user_id?: string | null
        }
        Update: {
          id?: string
          isDefault?: boolean
          name?: string
          type_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Category_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "type_transaction"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Category_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Currency: {
        Row: {
          code: number | null
          id: string
          name: string
          shortName: string | null
          symbol: string | null
        }
        Insert: {
          code?: number | null
          id?: string
          name: string
          shortName?: string | null
          symbol?: string | null
        }
        Update: {
          code?: number | null
          id?: string
          name?: string
          shortName?: string | null
          symbol?: string | null
        }
        Relationships: []
      }
      Settings: {
        Row: {
          defaultCurrencyId: string
          id: string
          itemsPerPage: number
          userId: string
        }
        Insert: {
          defaultCurrencyId: string
          id?: string
          itemsPerPage?: number
          userId: string
        }
        Update: {
          defaultCurrencyId?: string
          id?: string
          itemsPerPage?: number
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Settings_defaultCurrencyId_fkey"
            columns: ["defaultCurrencyId"]
            isOneToOne: false
            referencedRelation: "Currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Settings_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          amount: number
          category_id: string
          completed_at: string
          currency_id: string
          description: string
          id: number
          profile_id: string
        }
        Insert: {
          amount: number
          category_id: string
          completed_at: string
          currency_id: string
          description: string
          id?: number
          profile_id: string
        }
        Update: {
          amount?: number
          category_id?: string
          completed_at?: string
          currency_id?: string
          description?: string
          id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "Category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_currency_id_fkey"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "Currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      type_transaction: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
