import { Field, Form, Formik } from "formik"
import { useContext } from "react"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import { AuthContext } from "../../context/AuthContext"
import { FooterContainer, FormContainer, SignUpContainer } from "./styles"

const SIGN_UP_FORM_INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
}

const SIGN_UP_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required('Nome é um campo obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é um campo obrigatório')
})

type SignUpFormType = typeof SIGN_UP_FORM_INITIAL_VALUES;

export const SignUp = () => {

  const { handleRegisterUser } = useContext(AuthContext)

  return (
    <SignUpContainer>
      <FormContainer>
        <div className="title">
          <h1>Bem vindo ao melhor coffee delivery do Brasil</h1>
          <p>Cadastre-se abaixo:</p>
        </div>
        <Formik<SignUpFormType>
          initialValues={SIGN_UP_FORM_INITIAL_VALUES}
          validationSchema={SIGN_UP_FORM_VALIDATION_SCHEMA}
          onSubmit={values => {
            const { email, password, name } = values
            handleRegisterUser(email, password, name)
          }}
        >{({ errors, touched }) => (
          <Form>
            <div>
              <Field name="name" placeholder="Digite seu nome" />
              {errors.name && touched.name && (<span>{errors.name}</span>)}
            </div>

            <div>
              <Field name="email" placeholder="Seu melhor email:" />
              {errors.email && touched.email && (<span>{errors.email}</span>)}
            </div>

            <div>
              <Field type="password" name="password" placeholder="Senha de acesso:" />
              {errors.password && touched.password && (<span>{errors.password}</span>)}
            </div>
            <button type="submit">Cadastrar</button>
          </Form>
        )}
        </Formik>

        <FooterContainer>
          <span>Já possui uma conta? </span>
          <Link to="/login">Entre agora mesmo</Link>
        </FooterContainer>

      </FormContainer>
    </SignUpContainer>
  )
}
