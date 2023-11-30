import styled from "styled-components";
import { devices } from "../../../config/breakPoints";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.border};
  transition: all 300ms;
  padding: 5rem 0;
  gap: 5rem;

  img {
    width: 250px;
    border-radius: 15px;
    box-shadow: 0px 6px 16px 1px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (min-width: ${devices.md}px) {
    img {
      width: 350px;
    }
  }
`;
