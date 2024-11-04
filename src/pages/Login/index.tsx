import { SignIn } from "../../components/SignIn"
import { Welcome } from "../../components/welcome"
import { LoginContainer } from "./styles"

export const Login = () => {

  return (
    <LoginContainer>
      <Welcome />
      <SignIn />
    </LoginContainer>
  )
}
