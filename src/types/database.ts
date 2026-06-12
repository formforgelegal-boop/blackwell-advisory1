export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      packages: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string | null;
          stripe_price_id: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description?: string | null;
          stripe_price_id?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          description?: string | null;
          stripe_price_id?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      package_documents: {
        Row: {
          id: string;
          package_id: string;
          template_slug: string;
          sort_order: number;
        };
        Insert: {
          id?: string;
          package_id: string;
          template_slug: string;
          sort_order?: number;
        };
        Update: {
          id?: string;
          package_id?: string;
          template_slug?: string;
          sort_order?: number;
        };
        Relationships: [
          {
            foreignKeyName: "package_documents_package_id_fkey";
            columns: ["package_id"];
            isOneToOne: false;
            referencedRelation: "packages";
            referencedColumns: ["id"];
          },
        ];
      };
      entitlements: {
        Row: {
          id: string;
          user_id: string;
          package_id: string | null;
          scope: "package" | "all";
          source: string;
          stripe_reference: string | null;
          starts_at: string;
          expires_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          package_id?: string | null;
          scope: "package" | "all";
          source: string;
          stripe_reference?: string | null;
          starts_at?: string;
          expires_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          package_id?: string | null;
          scope?: "package" | "all";
          source?: string;
          stripe_reference?: string | null;
          starts_at?: string;
          expires_at?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "entitlements_package_id_fkey";
            columns: ["package_id"];
            isOneToOne: false;
            referencedRelation: "packages";
            referencedColumns: ["id"];
          },
        ];
      };
      generated_documents: {
        Row: {
          id: string;
          user_id: string;
          template_slug: string;
          display_name: string | null;
          form_data: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          template_slug: string;
          display_name?: string | null;
          form_data?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          template_slug?: string;
          display_name?: string | null;
          form_data?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
}

// Convenience row aliases
export type Package          = Database["public"]["Tables"]["packages"]["Row"];
export type PackageDocument  = Database["public"]["Tables"]["package_documents"]["Row"];
export type Entitlement      = Database["public"]["Tables"]["entitlements"]["Row"];
export type GeneratedDocument = Database["public"]["Tables"]["generated_documents"]["Row"];
