import { styled } from "styled-components";

export const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 7px;
  border: 1px solid #ccc;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: all 300ms;

  &:focus {
    outline: none;
    border: 1px solid #0284c7;
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
    transition: all 300ms;
  }
`;
