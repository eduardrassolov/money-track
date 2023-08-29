import { styled } from "styled-components";

export const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 7px;
  border: 1px solid #ccc;
  background: #f4f4f4;

  &:focus {
    outline: none;
    border: 1px solid #0284c7;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;
