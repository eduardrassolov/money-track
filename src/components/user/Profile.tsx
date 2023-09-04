
import { useUser } from '../../utils/hooks/useUser'
import { styled } from 'styled-components'
import Avatar from './Avatar'

const P = styled.p`
    overflow-wrap: break-word;
    margin: 0;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 1rem; 
    text-align: center;
    
`

export default function Profile() {
    const { user } = useUser();
    console.log(user);
    return (
        <ProfileContainer>
            <Avatar />
            <P>User id: <br />{user?.id}</P>
        </ProfileContainer>
    )
}
