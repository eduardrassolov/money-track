import { styled } from "styled-components"
import { devices } from "./breakPoints.ts"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem;
  padding: 0;


  @media only screen and (min-width: ${devices.md}px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 1.2rem;
    max-width: 1000px;
    flex-direction: column;
  }
`

const FormDiv = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  margin: 0 0 2rem ;
`
const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 15px;
`

export { Container, FormDiv, ListDiv }