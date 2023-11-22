import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.text};
    transition: all 300ms;
`;
