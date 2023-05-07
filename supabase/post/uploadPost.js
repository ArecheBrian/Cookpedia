export const UploadPost = async (supabase, data) => {
    try {
        const res = await supabase.from("post").insert(data).select();
        if (res) alert("Order Registered Correctly ✅");
    } catch(err) {
        alert("Error creating order ❌");
        console.log(err, err.message);
        return false;
    }
}