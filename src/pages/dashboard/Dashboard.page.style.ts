import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(310px, 1000px, 95%);
  gap: 1rem;
  overflow: scroll;
  margin: 3.5rem 0 1rem;
  padding: 1.5rem 1rem 5rem;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem;

  @media (max-width: 670px) {
    margin: 0 0 0.5rem;
  }
`;

const RowContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  margin: 0;
  gap: 1rem;
`;

const PieBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* @media only screen and (min-width: ${devices.md}px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  } */
`;
const PieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: 0 0 1rem;
  background: ${(props) => props.theme.background};
  border-radius: 15px;
  transition: all 300ms;

  @media only screen and (min-width: ${devices.md}px) {
    flex: 2;
    flex-wrap: wrap;
    min-width: 400px;
  }
`;
export { StyledContainer, RowContainer, RowContainerCards, PieBlock, PieContainer };
