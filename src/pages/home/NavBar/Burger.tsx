import { useState } from "react"
import { styled } from "styled-components"
import { devices } from "../../../styles/breakPoints";
import NavLinks from "./NavLinks";

const StyledBurger = styled.div<{ $isOpen: boolean }>`
    display: none;
    div{
        width: 2rem;
        height: 0.2rem;
        background: ${(props) => props.$isOpen ? '#c0c0c0' : '#000'};
        border-radius: 10px;
    }

    @media ${devices.md} {
        z-index: 100;
        position: fixed;
        right: 1rem;
        top: 1.6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;;

        div:nth-child(1){
            transform: ${(props) => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
            transform: ${(props) => props.$isOpen ? 'translateY(0.7rem) rotate(45deg)' : 'translateY(0)'};
            transition: all 300ms ease-in-out;
        }
        div:nth-child(2){
            transform: ${(props) => props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
            transition: all 300ms ease-in-out;
            margin: 0.4rem 0;
        }
        div:nth-child(3){
            opacity: ${(props) => props.$isOpen ? '0' : '1'};
            transform: ${props => props.$isOpen ? 'translateX(3rem)' : ''};
            transition: all 300ms ease-in-out;
        }
    }
`

export default function Burger() {
    const [isOpen, setOpen] = useState(false);
    const handleBurger = () => setOpen((prev) => !prev);

    return (
        <>
            <StyledBurger $isOpen={isOpen} onClick={handleBurger} >
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>
            <NavLinks isOpen={isOpen} />

        </>
    )
}
