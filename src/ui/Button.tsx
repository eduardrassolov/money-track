import { FC } from "react";
import { styled } from "styled-components"

const StyledButton = styled.button <{ $variant?: string }> `
  background: ${({ $variant }) => $variant === "primary" ? "##0284c7" : "transparent"};
  background: ${({ $variant }) => $variant === "secondary" ? "transparent" : "#0284c7"};

  color: ${({ $variant }) => $variant === "primary" ? "#fff" : "#0284c7"};
  
  font-size: 1rem;
  padding: 0.5rem 1.1rem;
  border: 1px solid #0284c7;
  border-radius: 3px;
  cursor: pointer;  
    transition: 0.3s;

  &:hover{
    background: ${({ $variant }) => $variant === "primary" ? "#0272a2" : "#e0f2fe"};
  }
  &:active{
    scale: 0.95;
  }
`;

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
}

const Button: FC<IButtonProps> = ({ children, type = "button", variant = "primary", onClick, isDisabled = false }) => {
  return (
    <StyledButton onClick={onClick} $variant={variant} type={type} disabled={isDisabled}>{children}</StyledButton>
  )
}

export default Button;