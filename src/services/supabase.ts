import { createClient } from "@supabase/supabase-js"
import { Database } from "./dbType";


const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZ3l2dHpkamhydWhzdnJvZHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0ODUyMDQsImV4cCI6MjAwODA2MTIwNH0.MuYyR-S7cAdMJo93l90pD8co7EHA9I79BnpGKVBiATU";
const supabaseUrl = "https://isgyvtzdjhruhsvrodrd.supabase.co";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;