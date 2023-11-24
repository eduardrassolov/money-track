import styled, { keyframes } from 'styled-components';

export const rotateAnimation = keyframes`
    0% {transform: rotate(0)};
    100% {transform: rotate(45deg)};
`
const StyledIcon = styled.div`
    display: flex;
    
    &:hover{
        animation: ${rotateAnimation};
        animation-duration: 1s;
    };
`
interface IIconItem {
    children: React.ReactNode;
}

export default function IconItem({ children }: IIconItem) {
    return (
        <StyledIcon>
            {children}
        </StyledIcon>
    )
}
