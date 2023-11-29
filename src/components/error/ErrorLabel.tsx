import styled from 'styled-components';

interface IErrorLabel {
    errMsg?: string
}

const StyledError = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.error};
  margin: 0 0 1rem;
  transition: all 300ms;
`;

export default function ErrorLabel({ errMsg }: IErrorLabel) {
    return (
        <StyledError>{errMsg}</StyledError>
    )
}
