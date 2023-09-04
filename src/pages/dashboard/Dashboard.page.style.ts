import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(310px, 1000px, 95%);
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem;

  @media (max-width: 670px) {
    margin: 0 0 0.5rem;
  }
`;

const RowContainerCards = styled(RowContainer)`
  gap: 1rem;
  flex-wrap: wrap;

  @media only screen and (min-width: ${devices.sm}px) {
    justify-content: start;
    align-items: flex-start;
  }

  @media only screen and (min-width: ${devices.md}px) {
    justify-content: space-between;
  }
`;

const PieBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: ${devices.md}px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const PieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: 0 0 1rem;
  background: #fff;
  border-radius: 15px;

  @media only screen and (min-width: ${devices.md}px) {
    flex: 2;
    flex-wrap: wrap;
    min-width: 400px;
  }
`;
export { StyledContainer, RowContainer, RowContainerCards, PieBlock, PieContainer };
