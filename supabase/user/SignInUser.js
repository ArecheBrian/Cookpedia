import { Alert } from "native-base"
import { supabase } from "../../lib/supabase"

export async function signInWithEmail() {
    try {
      const { data,error } = await supabase.auth.signInWithPassword({
        email: "ixuexwt178@mailtemporal.org",
        password: "brian2002",
      })
      return data
    } catch(error){
      Alert.alert(error)
    } 
}