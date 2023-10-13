import { styled } from "styled-components"
import { devices } from "./breakPoints.ts"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0;
  padding: 2rem 0.5rem;

  @media only screen and (min-width: ${devices.md}px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 0.5rem;
    max-width: 1000px;
    flex-direction: column;
  }
`

const FormDiv = styled.div`
  grid-area: 2 / 1 / 3 / 2;

`
const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 7px;
  height: 90dvh;
`

export { Container, FormDiv, ListDiv }