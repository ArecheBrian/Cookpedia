import { Alert } from "native-base";
import { supabase } from "../../lib/supabase";

export async function signUpWithEmail({userEmail,userPassword, options}) {
    try{
        const { data,error } = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword,
            options: options 
        })
    }catch(error){
        Alert.alert(error.message)
    }
  }