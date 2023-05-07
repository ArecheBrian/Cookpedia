import { Center, Input, KeyboardAvoidingView, Box, Heading, VStack, FormControl, Link, Button, HStack, Text } from "native-base"
import { useState } from "react"
import { signUpWithEmail } from "../supabase/user/RegisterUser"
import 'react-native-url-polyfill/auto'

export const RegisterScreen = () => {
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
  const [full_name, setFull_name] = useState('')
    return (
        <KeyboardAvoidingView flex={1}>
            <Center  flex={1} safeAreaTop={8}>
                <Center w="90%">
                    <Box safeArea p="2" w="90%" maxW="290" py="8">
                        <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Welcome
                        </Heading>
                        <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                        </Heading>
                        <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>name</FormControl.Label>
                            <Input onChangeText={value => setFull_name(value)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input onChangeText={value => setEmail(value)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" onChangeText={value => setPassword(value)} />
                        </FormControl>
                        <Button mt="2" colorScheme="indigo" onPress={()=> signUpWithEmail({userEmail,userPassword, options: {data: {full_name }}})}>
                            Sign up
                        </Button>
                        </VStack>
                    </Box>
                </Center>
            </Center>
        </KeyboardAvoidingView>
    )
}