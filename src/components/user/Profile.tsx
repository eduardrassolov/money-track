
import { useUser } from '../../utils/hooks/useUser'
import { styled } from 'styled-components'
import Avatar from './Avatar'
import { devices } from '../../config/breakPoints'

const P = styled.p`
    overflow-wrap: break-word;
    display: none;
    color: ${props => props.theme.text};

    @media only screen and (min-width: ${devices.sm}px){
        display: flex;
    }
`
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
`

export default function Profile() {
    const { user } = useUser()
    return (
        <ProfileContainer>
            <P>{user?.user_metadata.firstName}</P>
            <Avatar />
        </ProfileContainer >
    )
}
