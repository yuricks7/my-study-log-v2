import { createClient } from '@supabase/supabase-js'
// import process from 'process';

// Supabaseの設定
export const supabaseUrl: any
      = process.env.VITE_SUPABASE_URL;
export const supabasePublishableKey: any
      = process.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;

// export const supabaseUrl: any
//       = import.meta.env.VITE_SUPABASE_URL;
// export const supabasePublishableKey: any
//       = import.meta.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;

console.log(supabaseUrl);
console.log(supabasePublishableKey);

export const supabase: any = createClient(supabaseUrl, supabasePublishableKey);