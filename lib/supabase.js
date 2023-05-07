import { createClient } from "@supabase/supabase-js"
import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'

const supabaseUrl = "https://adbcshgeywaljziivign.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkYmNzaGdleXdhbGp6aWl2aWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMjY1NjYsImV4cCI6MTk5MzcwMjU2Nn0.YTYSf9sPq4zF3u45fuFme1ppuSv6eTtT4mfQER5HNhQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
})