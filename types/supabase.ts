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
      category: {
        Row: {
          id: number
          name: string
          type_id: number
        }
        Insert: {
          id?: never
          name: string
          type_id: number
        }
        Update: {
          id?: never
          name?: string
          type_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "category_type_id_fkey"
            columns: ["type_id"]
            referencedRelation: "type_transaction"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          amount: number
          category_id: number
          completed_at: string
          description: string
          id: number
          user_id: number
        }
        Insert: {
          amount: number
          category_id: number
          completed_at: string
          description: string
          id?: number
          user_id: number
        }
        Update: {
          amount?: number
          category_id?: number
          completed_at?: string
          description?: string
          id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "transactions_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
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
      users: {
        Row: {
          email: string
          full_name: string | null
          id: number
          login: string | null
          password: string | null
        }
        Insert: {
          email: string
          full_name?: string | null
          id?: number
          login?: string | null
          password?: string | null
        }
        Update: {
          email?: string
          full_name?: string | null
          id?: number
          login?: string | null
          password?: string | null
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
