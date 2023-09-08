import { styled } from "styled-components";

export const Select = styled.select`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 0.3rem 0.6rem;
  border: 1px solid ${(props) => props.theme.background};
  cursor: pointer;
  border-radius: 5px;
  transition: all 300ms;
`;
