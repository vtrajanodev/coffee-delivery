import localeIcon from "../../assets/locale-yellow.svg";
import currency from "../../assets/currency.svg";
import creditCard from "../../assets/credit-card.svg";
import debitCard from "../../assets/debit-card.svg";
import money from "../../assets/money.svg";
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

export const Address = () => {
  return (
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
          <div className="block">
            <div>
              <input type="text" placeholder="CEP" />
            </div>
            <div>
              <input type="text" className="street" placeholder="Rua" />
            </div>
          </div>

          <div className="flex-1">
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </div>

          <div className="flex-2">
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
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
  );
};
