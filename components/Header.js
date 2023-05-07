import { Box, Button, Heading, HStack } from "native-base"
import { Ionicons } from '@expo/vector-icons';

export const Header = ()=> {
    return (
        <HStack bg={"rose.600"} safeAreaTop="8" height={"24"} alignItems={"center"} space={4} pl={4}>
            <Ionicons name="arrow-back-sharp" size={24} color="white" />
            <Heading size={"md"} color={"white"}>Create Post</Heading>
        </HStack>
    )
}

export const HomeHeader =()=> { 
    return (
        <HStack bg={"rose.600"} safeAreaTop="8" height={"24"} alignItems={"center"} space={4} pl={4} w={"full"}>
        </HStack>
    )
}