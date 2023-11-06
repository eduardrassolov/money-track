import { styled } from "styled-components";
import { devices } from "../../config/breakPoints";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2.5rem 1rem;
  overflow: scroll;

  @media only screen and (min-width: ${devices.sm}px) {
    justify-content: center;
    align-items: center;
  }
`;

// export const P = styled.p`
//   margin: 0;
//   font-size: 1rem;
//   font-weight: 409;
//   color: #71717a;
//   display: flex;
//   width: 100%;
//   font-weight: 400;
//   width: fit-content;
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: auto;
  margin: 2rem 0;
  padding: 0 0 1rem;
`;

export const GropHorizontal = styled.div`
  display: flex;
  margin: 0 0 1.5rem;
  gap: 0.3rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 0 0 0.5rem;
`;
export const Input = styled.input`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #e4e4e7;
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  transition: all 300ms ease-in-out;

  &:focus {
    transition: all 300ms ease-in-out;
    outline: none;
    border: 1px solid #3b82f6;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colorLogoMain};

  &:visited {
    color: ${(props) => props.theme.colorLogoMain};
  }
`;
