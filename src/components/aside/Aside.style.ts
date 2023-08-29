import { styled } from "styled-components";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  font-size: 1rem;
  box-shadow: 0.4px 0px 0.5px rgba(0, 0, 0, 0.032), 1.3px 0px 1.6px rgba(0, 0, 0, 0.048),
    6px 0px 7px rgba(0, 0, 0, 0.08);
  ul {
    margin: 0;
    padding: 0;
    gap: 5rem;
  }
`;
