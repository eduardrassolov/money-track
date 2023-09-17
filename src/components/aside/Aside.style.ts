import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

export const StyledAside = styled.div<{ $isBurgerOpen: boolean }>`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  position: fixed;
  z-index: 20;
  width: 150px;
  height: 100vh;
  transform: ${(props) => (props.$isBurgerOpen ? "translateX(0)" : "translateX(-10rem)")};
  transition: all 300ms;

  @media only screen and (min-width: ${devices.md}px) {
    transform: translateX(0);
    padding: 0;
    display: flex;
    position: initial;
    flex-direction: column;
    width: 200px;
    transition: all 300ms;
  }
  ul {
    margin: 0;
    padding: 0;
    gap: 5rem;
    transition: all 300ms;
  }
`;
