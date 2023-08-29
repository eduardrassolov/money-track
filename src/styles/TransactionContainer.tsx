import { styled } from "styled-components"
import { devices } from "./breakPoints"

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-column-gap: 1.2rem;
    margin: 0 1rem 1rem;
    max-width: 1000px;

    @media only screen and ${devices.md} {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`

const FormDiv = styled.div`
  grid-area: 2 / 1 / 3 / 2; 
`
const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 15px;
`

export { Container, FormDiv, ListDiv }