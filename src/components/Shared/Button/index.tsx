import React, { ReactNode } from 'react';

//* Styled components
import { ButtonStyled } from './styles';

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  href: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
