export async function getPost(supabase) {
    try {  
      let { data, error} = await supabase.from("post").select("*");
      if (error) console.log("error", error);
      if (data) return data;
    } catch (err) {
      console.log(err.message);
    }
}
  