import { Field, Form, Formik } from "formik"
import { useContext } from "react"
import facebookIcon from '../../assets/facebook.svg'
import googleIcon from '../../assets/google.svg'
import { AuthContext } from "../../context/AuthContext"
import { FooterContainer, FormContainer, SignInContainer, SocialButtonsContainer } from "./styles"
import { Link } from "react-router-dom"

const SignInInitialFormValues = {
  email: '',
  password: ''
}

export type SignInFormType = typeof SignInInitialFormValues

export const SignIn = () => {

  const { signInWithGoogleAccount } = useContext(AuthContext)

  return (
    <SignInContainer>
      <header>
        <h1>Bem vindo ao HTTP Coffee Delivery</h1>
      </header>

      <FormContainer>

        <h3>Entre com sua conta HTTPCoffee:</h3>
        <Formik<SignInFormType>
          initialValues={SignInInitialFormValues}
          onSubmit={async (values) => {
            // await handleLogin(values)
            console.log(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" placeholder="Email" />
              {errors.email && touched.email && (
                <div>{errors.email}</div>
              )}
              <Field type="password" name="password" placeholder="Senha" />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
              <button type="submit">Acessar cafeteria</button>
            </Form>
          )}
        </Formik>

        <FooterContainer>
          <div className="signin-info">
            <p>Não possui uma conta? </p>
            <Link to="/signup">Clique aqui e cadastre-se</Link> 
          </div>
          
          <strong>Ou</strong>

          <SocialButtonsContainer className="social-buttons">
            <button onClick={signInWithGoogleAccount} className="social-button"><img src={googleIcon} alt="" />Acesse com o Google</button>
            <button className="social-button"><img src={facebookIcon} alt="" />Acesse com o facebook</button>
          </SocialButtonsContainer>
        </FooterContainer>
      </FormContainer>
    </SignInContainer>
  )
}
