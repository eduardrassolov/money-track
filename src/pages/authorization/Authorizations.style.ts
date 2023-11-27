import styled from "styled-components";
import { devices } from "../../config/breakPoints";
import { NavLink } from "react-router-dom";

export const StyledAuthorization = styled.div`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media only screen and (min-width: ${devices.sm}px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const ImageContainer = styled.div`
    display: none;

    @media only screen and (min-width: ${devices.sm}px) {
        img {
            width: 100%;
            max-width: 700px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 700px;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    border-radius: 15px;
    padding: 3rem;

    @media only screen and (min-width: ${devices.sm}px) {
        width: auto;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        max-width: 400px;
        border: 1px solid ${(props) => props.theme.border};
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colorLogoMain};

    &:visited {
        color: ${(props) => props.theme.colorLogoMain};
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const Input = styled.input`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #e4e4e7;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
    transition: all 300ms ease-in-out;

    &:focus {
        transition: all 300ms ease-in-out;
        outline: none;
        border: 1px solid #3b82f6;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
