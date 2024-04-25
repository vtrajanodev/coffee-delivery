export type ButtonTypeVariant = 'primary' | 'secondary'

export interface ButtonContainerProps {
  buttonType: ButtonTypeVariant;
}

export interface ButtonProps {
  type: ButtonTypeVariant;
  content: string
}