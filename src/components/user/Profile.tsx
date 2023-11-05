
import { useUser } from '../../utils/hooks/useUser'
import { styled } from 'styled-components'
import Avatar from './Avatar'

const P = styled.p`
    overflow-wrap: break-word;
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
