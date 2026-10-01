import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hlkizgtszibsseulcpqz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsa2l6Z3Rzemlic3NldWxjcHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NjA5ODUsImV4cCI6MjEwNjQzNjk4NX0.aSG5st-XQuUayEYoGJhY-pWJJC32ig_GThpy5Ou0Ce0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type RekapRow = {
  id?: string;
  month_key: string;
  officers: unknown;
  updated_at?: string;
};
