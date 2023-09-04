import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

export const StyledAside = styled.div<{ $isBurgerOpen: boolean }>`
  background: #fff;
  font-size: 1rem;
  padding: 3rem 0;
  position: fixed;
  height: 100vh;
  z-index: 20;
  width: 150px;
  transform: ${(props) => (props.$isBurgerOpen ? "translateX(0)" : "translateX(-10rem)")};
  transition: all 300ms ease-in-out;

  @media only screen and (min-width: ${devices.md}px) {
    transform: translateX(0);
    padding: 1rem 0;
    background: #fff;
    display: flex;
    position: initial;
    flex-direction: column;
    width: 200px;
  }
  ul {
    margin: 0;
    padding: 0;
    gap: 5rem;
  }
`;
