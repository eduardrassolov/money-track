import styled from "styled-components";
import { devices } from "../../../../config/breakPoints";

export const StyledFeaturesItem = styled.div<{ $side: string }>`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    @media only screen and (min-width: ${devices.md}px) {
        flex-direction: ${(props) => (props.$side === "left" ? "row" : "row-reverse")};
        justify-content: center;
        gap: 6rem;
    }
`;

export const TextContainer = styled.div`
    max-width: 500px;
    margin: 0 auto 1rem;

    h2 {
        letter-spacing: -0.5px;
        font-size: 2rem;
        line-height: 2rem;
        margin: 1rem auto 0.8rem;
    }
    p {
        line-height: 1.5rem;
        color: #878585;
        font-size: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    @media only screen and (min-width: ${devices.md}px) {
        text-align: left;
    }
`;

export const ImageContainer = styled.div`
    @media only screen and (min-width: ${devices.md}px) {
        display: flex;
        align-items: center;
        justify-items: center;
    }
`;
