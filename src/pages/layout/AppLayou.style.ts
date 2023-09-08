import { styled } from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  background-color: #fff;
  height: 100vh;
`;

const Section = styled.section`
  background: ${(props) => props.theme.background2};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: scroll; */
  overflow: hidden;
  /* padding: 5rem 0 1rem; */
  transition: all 300ms;
`;

export { StyledLayout, Section };
