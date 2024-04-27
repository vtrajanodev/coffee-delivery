import localeIcon from '../../assets/locale-yellow.svg'
import { AddressContainer, AddressTitleContainer, FormContainer, FormFieldsContainer, FormHeaderContainer, FormHeaderTextContainer } from "./styles"

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
          <div className='block'>
            <div>
              <input type="text" placeholder='CEP'/>
            </div>
            <div>
              <input type="text" className='street' placeholder='Rua'/>
            </div>
          </div>

          <div className='flex-1'>
            <input type="text" placeholder='Número'/>
            <input type="text" placeholder='Complemento'/>
          </div>

          <div className='flex-2'>
            <input type="text" placeholder='Bairro'/>
            <input type="text" placeholder='Cidade'/>
            <input type="text" placeholder='UF'/>
          </div>

        </FormFieldsContainer>
      </FormContainer>
    </AddressContainer>
  )
}
