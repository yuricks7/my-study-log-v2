import { createClient } from '@supabase/supabase-js'

// Supabaseの設定
const supabaseUrl: string
      = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey: string
      = import.meta.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;

export const supabase: any = createClient(
  supabaseUrl,
  supabasePublishableKey
);