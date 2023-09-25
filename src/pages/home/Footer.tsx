import { styled } from "styled-components"

const StyledFooter = styled.footer`
        background: ${props => props.theme.colorLogoMain};
        color: #F1F0E8;
        display: flex;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    p{
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>&#169; Budget Control 2023 - Created by Eduard Rassolov.</p>
        </StyledFooter>
    )
}
