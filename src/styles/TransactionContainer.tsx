import { styled } from "styled-components"

export const Container = styled.div`
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 1rem;
  width: 100%;
  transition: all 300ms;
`

export const FormContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`

export const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 7px;
  height: 90dvh;
`
