import { styled } from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  grid-column-gap: 1.2rem;
  grid-row-gap: 1rem;
  margin: 1rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
const StatsContainer = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  border: 1px solid #ccc;
  border-radius: 7px;
`;
const FormContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;
const ListContainer = styled.div`
  border: 1px solid #ccc;
  grid-area: 2 / 2 / 3 / 3;
  border-radius: 7px;
`;

export { StyledGrid, StatsContainer, FormContainer, ListContainer };
