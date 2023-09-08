import { styled } from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  background-color: #fff;
`;

const Section = styled.section`
  background: ${(props) => props.theme.backGround2};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  padding: 5rem 0;
  transition: all 300ms;
`;

export { StyledLayout, Section };
