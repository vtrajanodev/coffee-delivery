import { Field, Form, Formik } from "formik"
import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import facebookIcon from '../../assets/facebook.svg'
import googleIcon from '../../assets/google.svg'
import { AuthContext } from "../../context/AuthContext"
import { EmailContainer, FooterContainer, FormContainer, PasswordContainer, SignInContainer, SocialButtonsContainer } from "./styles"

const SignInInitialFormValues = {
  email: '',
  password: ''
}


const SIGN_UP_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é um campo obrigatório')
})

export type SignInFormType = typeof SignInInitialFormValues

export const SignIn = () => {


  const { user, signInWithGoogleAccount, signInWithFacebookAccount } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  }, [user])

  const handleSignInWithGoogleAccount = async () => {
    signInWithGoogleAccount()
  }

  const handleSignInWithFacebookAccount = async () => {
    signInWithFacebookAccount()
  }

  return (
    <SignInContainer>
      <header>
        <h1>Bem vindo ao HTTP Coffee Delivery</h1>
      </header>

      <FormContainer>
        <h3>Entre com sua conta HTTPCoffee:</h3>
        <Formik<SignInFormType>
          initialValues={SignInInitialFormValues}
          validationSchema={SIGN_UP_FORM_VALIDATION_SCHEMA}
          onSubmit={async (values) => {
            // await handleLogin(values)
            console.log(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <EmailContainer $hasError={!!errors.email && !!touched.email}>
                <Field name="email" placeholder="Email" />
              </EmailContainer>
              <PasswordContainer $hasError={!!errors.password && !!touched.password}>
                <Field type="password" name="password" placeholder="Senha" />
              </PasswordContainer>

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
            <button onClick={handleSignInWithGoogleAccount} className="social-button"><img src={googleIcon} alt="" />Acesse com o Google</button>
            <button onClick={handleSignInWithFacebookAccount} className="social-button"><img src={facebookIcon} alt="" />Acesse com o facebook</button>
          </SocialButtonsContainer>
        </FooterContainer>
      </FormContainer>
    </SignInContainer>
  )
}
