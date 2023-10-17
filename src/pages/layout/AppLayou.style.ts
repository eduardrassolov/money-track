import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

const StyledLayout = styled.div`
  display: flex;
  background-color: #fff;
  height: 100dvh;
`;

const Section = styled.section`
  background: ${(props) => props.theme.background2};
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  /* overflow: hidden; */
  transition: all 300ms;
`;

export { StyledLayout, Section };
