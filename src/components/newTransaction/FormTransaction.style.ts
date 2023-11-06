import { styled } from "styled-components";
import { devices } from "../../config/breakPoints";

const Form = styled.form`
  padding: 1rem 0;
  width: auto;
  transition: all 300ms;
  gap: 0.5rem;

  @media only screen and (min-width: ${devices.md}px) {
    min-width: 340px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    transition: all 300ms;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.2rem;
  gap: 0.5rem;
`;

export { Form, FormGroup, FormFooter };
