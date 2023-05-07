import { useNavigation } from "@react-navigation/native"
import { Box, Button, Center, Divider, Heading, Image, Text, VStack, ZStack } from "native-base"
import { imagenes } from "../assets/img"

export const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <Box flex={1}>
            <ZStack alignItems="center" justifyContent="center" h={'full'}>
                <Box bg="indigo.700" size="full" rounded="lg">
                    <Image source={imagenes.Fondo1} alt={"fondo1"} height={"full"} resizeMode={"cover"}/>
                </Box>
                <Box size={"full"} bg={"blueGray.900"} opacity={30}/>
                <VStack size={"full"} width={"90%"} alignItems={"center"} space={6}>
                    <Box>
                        <Heading textAlign={"center"} size={"2xl"} color={"blueGray.50"}>Welcome to</Heading>
                        <Heading textAlign={"center"} size={"2xl"} color={"red.600"}>Cookpedia 👋🏽</Heading>
                    </Box>
                    <Text fontSize={16} width={"64"} textAlign={"center"} color={"blueGray.50"}>the best cooking and food recipes app of the century.</Text>
                    <Divider/>
                    <VStack space={8} w={"full"}>
                        <Button h={"12"} borderRadius={20} bg={"white"} onPress={()=> navigation.navigate("Register")}><Text>Registrate</Text></Button>
                        <Button h={"12"} borderRadius={20} bg={"white"} onPress={()=> navigation.navigate("SignIn")}><Text>Sign in</Text></Button>
                        <Button onPress={()=>navigation.navigate("Home")}>saltar</Button>
                    </VStack>
                </VStack>
            </ZStack>
        </Box>
    )
}