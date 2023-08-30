import { styled } from "styled-components";

export const StyledAside = styled.div<{ $isBurgerOpen: boolean }>`
  /* display: ${(props) => (props.$isBurgerOpen ? "flex" : "none")}; */
  display: flex;
  background: #fff;
  font-size: 1rem;
  padding: 3rem 0;
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  transform: ${(props) => (props.$isBurgerOpen ? "translateX(0)" : "translateX(-10rem)")};
  transition: all 300ms ease-in-out;
  z-index: 15;

  ul {
    margin: 0;
    padding: 0;
    gap: 5rem;
  }
`;
