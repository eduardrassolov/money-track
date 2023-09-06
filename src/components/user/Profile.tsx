
import { useUser } from '../../utils/hooks/useUser'
import { styled } from 'styled-components'
import Avatar from './Avatar'

const P = styled.p`
    overflow-wrap: break-word;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Profile() {
    const { user } = useUser()
    return (
        <ProfileContainer>
            <Avatar />
            <div><P>User id: <br />{user?.id}</P></div>
        </ProfileContainer>
    )
}
