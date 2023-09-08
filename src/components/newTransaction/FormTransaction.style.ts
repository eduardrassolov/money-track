import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

const Form = styled.form`
  border: 1px solid ${(props) => props.theme.background};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 15px;
  padding: 1rem 2rem;
  width: auto;
  transition: all 300ms;

  @media only screen and (min-width: ${devices.md}px) {
    min-width: 340px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  label {
    margin-bottom: 0.5rem;
  }
  input {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 7px;
    border: 1px solid ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 300ms;

    &:focus {
      outline: none;
      border: 1px solid #0284c7;
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.text};
      transition: all 0.3s ease-in-out;
    }
  }
`;
const ErrorP = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.error};
  margin: 0 0 0.5rem;
  transition: all 300ms;
`;
const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.2rem;
  gap: 0.5rem;
`;

export { Form, FormGroup, ErrorP, FormFooter };
