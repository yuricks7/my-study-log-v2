import { createClient } from '@supabase/supabase-js'

// Supabaseの設定
export const supabaseUrl: any
      = process.env.VITE_SUPABASE_URL;
export const supabasePublishableKey: any
      = process.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;

export const supabase: any = createClient(supabaseUrl, supabasePublishableKey);