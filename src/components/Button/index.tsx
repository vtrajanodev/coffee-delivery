import { ButtonProps } from '../../@types/button.type';
import { ButtonContainer } from './Button.styles';



export const Button = ({ type, content }: ButtonProps) => {
  return (
    <ButtonContainer buttonType={type}>{content}</ButtonContainer>
  )
}
