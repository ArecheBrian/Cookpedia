import { Box, Heading, HStack, Image, Text, Avatar, VStack } from "native-base"

export const PostCard = ({title, image}) => {
    return (
        <Box h={"md"} width={"100%"} bg={"white"} shadow={5} mb={5} borderRadius={15}>
            <HStack p={2} alignItems={"center"} space={4}>
                <Avatar bg="green.500" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                    AJ
                </Avatar>
                <Heading size={"sm"}>Julia0623</Heading>
            </HStack>
            <Box flex={1}>
                <Image source={{uri:`${image}`}} h={"full"} alt={"imagenes"}/>
            </Box>
            <VStack h={"24"} space={2} pl={4} pr={4} justifyContent={"center"}>
                <Heading size={"sm"}>{title}</Heading>
                <HStack><Text textAlign={"justify"}>lorem ipsum tecxto generico solo para rellenar lorem ipsum tecxto generico solo para rellenar</Text></HStack>
            </VStack>
        </Box>
    )
}