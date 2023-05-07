import { Box, VStack, Input, FormControl, Heading, TextArea, ScrollView, Button } from "native-base"
import { useState } from "react"
import { Header } from "./Header"
import { supabase } from "../lib/supabase"
import { UploadPost } from "../supabase/post/uploadPost"

export const AddPost = () => {
    return (
        <Box flex={1} bg={"blueGray50"}>
            <Header/>
            <ImputsArea/>
        </Box>
    )
}

const ImputsArea = () => {
    const [info, setInfo] = useState({
        image: "",
        title: "",
        ingredients: "",
        preparation: ""
    })
    console.log(info)
    return (
        <Box flex={1} p={4}>
            <ScrollView>
                <VStack flex={1} space={8}>
                    <FormControl>
                        <Heading size={"sm"} mb={4}>Image</Heading>
                        <Input
                            onChangeText={value => setInfo({...info, image: value})}
                            placeholder="Recipe Title" bg={"light.100"} borderColor={"light.100"} borderRadius={20} h={12}
                        />
                    </FormControl>
                    <FormControl>
                        <Heading size={"sm"} mb={4}>Title</Heading>
                        <Input
                            onChangeText={value => setInfo({...info, title: value})}
                            placeholder="Recipe Title" bg={"light.100"} borderColor={"light.100"} borderRadius={20} h={12}
                        />
                    </FormControl>
                    <FormControl>
                        <Heading size={"sm"} mb={4}>Ingredients</Heading>
                        <TextArea 
                            onChangeText={value => setInfo({...info, ingredients: value})}
                            h={"48"} placeholder="Text Area Placeholder" bg={"light.100"} borderColor={"light.100"} borderRadius={20}/>
                    </FormControl>
                    <FormControl>
                        <Heading size={"sm"} mb={4}>Preparation</Heading>
                        <TextArea  
                            onChangeText={value => setInfo({...info, preparation: value})}
                            h={"48"} placeholder="Text Area Placeholder" bg={"light.100"} borderColor={"light.100"} borderRadius={20}/>
                    </FormControl>
                    <Button bg={"rose.600"} borderRadius={20} h={12} 
                        onPress={()=> UploadPost(supabase,{
                            title: info.title,
                            image: info.image,
                            content: info.preparation,
                            ingredients: info.ingredients
                        })}>
                        Subir
                    </Button>
                </VStack>
            </ScrollView>
        </Box>
    )
}

const UploadImg = () => {
    return (
        <></>
    )
}