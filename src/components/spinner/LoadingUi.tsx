import { ThemeProvider, keyframes, styled } from "styled-components"
import { useBoundStore } from "../../store/store"

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Loader = styled.span<{ $size: number }>`
    width: ${props => props.$size}px;
    height:  ${props => props.$size}px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid ${props => props.theme.colorLogoMain};
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;

    &::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width:  ${props => props.$size}px;
        height:  ${props => props.$size}px;
        border-radius: 50%;
        border-bottom: 4px solid ${props => props.theme.colorLogoSecondary};
        border-left: 4px solid transparent;
    }
`
const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background};
    font-size: 5rem;
`

type Size = {
    size?: "sm" | "lg";
};

const sizes = {
    sm: 48,
    lg: 100
}

export default function LoadingUi({ size = "sm" }: Size) {
    const theme = useBoundStore((state) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            {
                size === "sm" ?
                    <center> <Loader $size={sizes[size]} /> </center>
                    :
                    <Container>
                        <Loader $size={sizes[size]}></Loader>
                    </Container>
            }
        </ThemeProvider>
    )
}
