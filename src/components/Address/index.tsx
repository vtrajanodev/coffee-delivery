import { Field, Formik } from "formik";
import { useContext } from "react";
import { Form } from "react-router-dom";
import { Address as CartAddress } from "../../@types/cart.type";
import creditCard from "../../assets/credit-card.svg";
import currency from "../../assets/currency.svg";
import debitCard from "../../assets/debit-card.svg";
import localeIcon from "../../assets/locale-yellow.svg";
import money from "../../assets/money.svg";
import { CartContext } from "../../context/CartContext";
import {
  AddressContainer,
  AddressTitleContainer,
  FormContainer,
  FormFieldsContainer,
  FormHeaderContainer,
  FormHeaderTextContainer,
  PaymentContainer,
  PaymentFooterContainer,
} from "./styles";

import * as Yup from 'yup';

const AddressFormSchema = Yup.object().shape({
  cpf: Yup.string()
    .required('Cep é obrigatório'),
  street: Yup.string()
    .min(5, 'Digite o nome completo da sua rua')
    .required('Rua é obrigatório'),
  number: Yup.string()
    .required(),
  complement: Yup.string()
    .notRequired(),
  neighbourhood: Yup.string()
    .required('Bairro é obrigatório'),
  city: Yup.string()
    .required('Cidade é obrigatório'),
  state: Yup.string()
    .required('Estado é obrigatório')
});

export const Address = () => {

  const { setDeliveryAdrress } = useContext(CartContext)


  const INTIAL_FORM_VALUES: CartAddress = {
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighbourhood: '',
    city: '',
    state: '',
  }

  return (
    <>
      <AddressContainer>
        <AddressTitleContainer>Complete seu pedido</AddressTitleContainer>

        <FormContainer>
          <FormHeaderContainer>
            <img src={localeIcon} alt="" />

            <FormHeaderTextContainer>
              <h2>Endereço de entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </FormHeaderTextContainer>
          </FormHeaderContainer>

          <FormFieldsContainer>

            <Formik
              initialValues={INTIAL_FORM_VALUES}
              validationSchema={AddressFormSchema}
              onSubmit={values => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="block">
                    <div>
                      <Field type="text" placeholder="CEP" name="cep" />
                      {errors.cep && touched.cep && (
                        <div>{errors.cep}</div>
                      )}
                    </div>
                    <div>
                      <Field type="text" className="street" placeholder="Rua" name="street"/>
                      {errors.street && touched.street && (
                        <div>{errors.street}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <Field type="text" placeholder="Número" name="number"/>
                    {errors.number && touched.number && (
                        <div>{errors.number}</div>
                      )}
                    <Field type="text" placeholder="Complemento" name="complement"/>
                    {errors.complement && touched.complement && (
                        <div>{errors.complement}</div>
                      )}
                  </div>

                  <div className="flex-2">
                    <Field type="text" placeholder="Bairro" name="neighbourhood"/>
                    {errors.neighbourhood && touched.neighbourhood && (
                        <> <br /> <div>{errors.neighbourhood}</div></>
                      )}
                    <Field type="text" placeholder="Cidade" name="city"/>
                    {errors.city && touched.city && (
                        <div>{errors.city}</div>
                      )}
                    <Field type="text" placeholder="UF" name="state"/>
                    {errors.state && touched.state && (
                        <div>{errors.state}</div>
                      )}
                  </div>
                </Form>
              )}
            </Formik>
          </FormFieldsContainer>
        </FormContainer>

        <PaymentContainer>
          <div>
            <img src={currency} alt="" />
            <div className="payment-info">
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <PaymentFooterContainer>
            <div>
              <img src={creditCard} alt="" />
              <span>CARTÃO DE CRÉDITO</span>
            </div>

            <div>
              <img src={debitCard} alt="" />
              <span>CARTÃO DE DÉBITO</span>
            </div>

            <div>
              <img src={money} alt="" />
              <span>DINHEIRO</span>
            </div>
          </PaymentFooterContainer>
        </PaymentContainer>
      </AddressContainer>
    </>

  );
};
