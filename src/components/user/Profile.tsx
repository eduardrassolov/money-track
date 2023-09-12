
import { useUser } from '../../utils/hooks/useUser'
import { styled } from 'styled-components'
import Avatar from './Avatar'

const P = styled.p`
    overflow-wrap: break-word;
    margin: 0 0 1rem;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1rem 0;
`

export default function Profile() {
    const { user } = useUser()
    return (
        <ProfileContainer>
            <Avatar />
            <P>{user?.user_metadata.firstName}</P>
        </ProfileContainer >
    )
}
