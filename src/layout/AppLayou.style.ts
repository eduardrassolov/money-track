import { styled } from "styled-components";
import { devices } from "../styles/breakPoints";

const StyledLayout = styled.div`
  display: flex;
  background-color: #fff;
`;

const Section = styled.section`
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  padding: 5rem 0;

  @media only screen and ${devices.md} {
    padding: 1rem 0;
  }
`;

export { StyledLayout, Section };
