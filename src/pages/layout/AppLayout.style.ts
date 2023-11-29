import { styled } from "styled-components";

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    height: 100vh;
    width: 100vw;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

export const Section = styled.section`
    background: ${(props) => props.theme.background};
    height: calc(100vh - 50px);
    transition: all 300ms;
    padding: 0;
`;
