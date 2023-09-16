import { keyframes, styled } from "styled-components"

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Loader = styled.span`
    width: 48px;
    height: 48px;
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
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-bottom: 4px solid ${props => props.theme.colorLogoSecondary};
        border-left: 4px solid transparent;
    }
`


export default function LoadingUi() {
    return (
        <>
            <Loader></Loader>
        </>
    )
}
