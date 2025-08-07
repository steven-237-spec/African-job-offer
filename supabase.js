import { createClient } from '@supabase/supabase-js';

     const supabaseUrl = 'https://gyejjsyqnsthucjzpjax.supabase.co'; // Replace with your Project URL
     const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5ZWpqc3lxbnN0aHVjanpwamF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNDc3MzcsImV4cCI6MjA2OTgyMzczN30.q9DxnAtFRgQS09w5zT54q0vDhXC1Xf3It5UAlDwf5QM'; // Replace with your Anon Key
     export const supabase = createClient(supabaseUrl, supabaseKey);