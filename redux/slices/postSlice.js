import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'react-native-url-polyfill/auto'
import { supabase } from "../../lib/supabase";
import { getPost } from "../../supabase/post/getPost";


export const fetchPost = createAsyncThunk(
    "Cookpedia/Post",
    async()=> {
        try {
            const post = await getPost(supabase);
            // console.log(post)
            if (post) return post;
        } catch (err) {
            console.log("error fetching products", err, err.message);
        }
    }
)

const initialState = {
    postData: null, status: 'idle' // 'pending' // 'failed' // 'success' 
}

const postSlices = createSlice({
    name: "postSlices",
    initialState,
    extraReducers(builder) {
        builder
          .addCase(fetchPost.fulfilled, (state, action) => {
            state.postData = action.payload;
            state.status = "success";
          })
          .addCase(fetchPost.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(fetchPost.rejected, (state, action) => {
            state.status = "failed";
          });
      },
})
export default postSlices.reducer;