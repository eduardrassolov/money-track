import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

export const StyledAside = styled.div<{ $isBurgerOpen: boolean }>`
  background: #fff;
  font-size: 1rem;
  padding: 3rem 0;
  position: fixed;
  height: 100vh;
  transform: ${(props) => (props.$isBurgerOpen ? "translateX(0)" : "translateX(-10rem)")};
  transition: all 300ms ease-in-out;

  @media only screen and ${devices.md} {
    transform: translateX(0);
    padding: 1rem 0;
    background: #fff;
    display: flex;
    position: initial;
    flex-direction: column;
  }
  ul {
    margin: 0;
    padding: 0;
    gap: 5rem;
  }
`;
