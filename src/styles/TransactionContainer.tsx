import { styled } from "styled-components"
import { devices } from "./breakPoints.ts"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.5rem 1rem 0;
  padding: 0;
  height: 100vh;
  overflow: scroll;


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
  margin: 2rem 1rem ;
`
const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 15px;
  height: 90vh;
  padding: 2rem 1rem;
`

export { Container, FormDiv, ListDiv }