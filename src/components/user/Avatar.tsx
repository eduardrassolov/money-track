import { FaUserCircle } from 'react-icons/fa'

import { styled } from 'styled-components'

const AvatarContainer = styled.div`
    color:  #3b82f6;
    border-radius: 15px;
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    transition: all 100ms ease-in-out;
    
    &:hover{
        scale: 1.05;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }
`

export default function Avatar() {
    return (
        <AvatarContainer>
            <FaUserCircle />
        </AvatarContainer>
    )
}
