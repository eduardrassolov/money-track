import { styled } from "styled-components";
import { devices } from "../../config/breakPoints";

const DashboardSection = styled.div`
    background: ${(props) => props.theme.background};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 1rem;
    height: calc(100vh - 62px);
    overflow: scroll;
    padding: 0 1rem;
`;

const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 1rem;

    @media (max-width: 670px) {
        margin: 0 0 0.5rem;
    }
`;

const RowContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    margin: 0;
    gap: 1rem;
`;

const PieBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0;
    margin: 0 0 1rem;
    background: ${(props) => props.theme.background};
    border-radius: 15px;
    transition: all 300ms;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: ${devices.md}px) {
        flex: 2;
        flex-wrap: wrap;
    }
`;
export { DashboardSection, RowContainer, RowContainerCards, PieBlock, PieContainer };
