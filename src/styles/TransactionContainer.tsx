import { styled } from "styled-components"

const Container = styled.div`
  background: ${props => props.theme.background};
  border-right: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  padding: 0 1rem;
  width: 100%;
  
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