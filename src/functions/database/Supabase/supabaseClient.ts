import { createClient } from '@supabase/supabase-js'

// Supabaseの設定
// export const supabaseUrl: any
//       = process.env.VITE_SUPABASE_URL;
// export const supabasePublishableKey: any
//       = process.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;


export const supabaseUrl: any
      = "https://yoekxqytwejcilqvxudk.supabase.co";
export const supabasePublishableKey: any
      = "sb_publishable_hOMs7v8BA70d-kWy22QY_Q_Pom4lf56";


export const supabase: any = createClient(supabaseUrl, supabasePublishableKey);