import { createClient } from '@supabase/supabase-js'

// Supabase内のテーブル名
export const TABLE_NAME = "study-record";

// Supabaseの設定
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey
          = import.meta.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);