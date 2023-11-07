import { styled } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0%;
  padding: 2rem 0.5rem;
`

const FormContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`

const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 7px;
  height: 90dvh;
`

export { Container, FormContainer, ListDiv }