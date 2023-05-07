import { Center, Input, FormControl, Button } from "native-base"
import { userSession } from "../redux/slices/userSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"


export const SignInScreen = () => {

  const dispatch = useDispatch()
  const [userEmail, setEmail] = useState('pepjas@morrui.gq')
  const [userPassword, setPassword] = useState('brian2002')
    return (
        <Center flex={1}  p={5}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={value=> setEmail(value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={value=> setPassword(value)}/>
          </FormControl>
          <Button mt={5} onPress={()=> dispatch(userSession())}>Sign in</Button>
        </Center>
    )
}