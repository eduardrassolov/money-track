import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 0 0 0.5rem;
  padding: 0;
`;

export default function HeaderText({ text }: { text: string }) {
    return (
        <H1>{text}</H1>
    )
}
