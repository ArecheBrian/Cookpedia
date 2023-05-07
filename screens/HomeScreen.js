import { Box, Button, FlatList, ScrollView, VStack } from "native-base"
import { useEffect } from "react"
import 'react-native-url-polyfill/auto'
import { useDispatch, useSelector } from "react-redux"
import { HomeHeader } from "../components/Header"
import { PostCard } from "../components/Post"
import { supabase } from "../lib/supabase"
import { fetchPost } from "../redux/slices/postSlice"
import { resetSlice } from "../redux/slices/userSlice"

export const HomeScreen = () => {
    const state = useSelector((state)=> state?.postSlice)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
    const logOutHandler = async () => {
        const {data, error} = await supabase.auth.signOut()
        dispatch(resetSlice())
    }
    return (
        <Box flex={1} bg={"blueGray.50"}>
            {state.status === "success" && 
                <Box flex={1} alignItems={"center"}>
                    <HomeHeader/>
                    <Button onPress={()=> logOutHandler()}>adios</Button>
                    <FlatList showsVerticalScrollIndicator={"false"} p={3} data={state.postData} renderItem={({item})=> <PostCard title={item.title} image={item.image}/>}/>
                </Box>
            }
            {state.status === "pending" && <Box flex={1} bg={"red.600"}></Box>}
        </Box>
    )
}