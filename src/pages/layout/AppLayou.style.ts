import { styled } from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  height: 100vh;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Section = styled.section`
  background: ${(props) => props.theme.background2};
  width: 100%;
  height: 100dvh;
  overflow: scroll;
  transition: all 300ms;
`;

export { StyledLayout, Section };
