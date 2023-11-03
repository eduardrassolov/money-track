import Avatar from '../../components/user/Avatar';
import styled from 'styled-components';


const P = styled.p`
    margin: 0.5rem 0;
`

const InformationContainer = styled.div`    
    span{
        color: gray;
    }
`

interface ISettingsHeader {
    email: string,
    created: string,
    lastUpd: string
}

export default function SettingsHeader({ email, created, lastUpd }: ISettingsHeader) {
    return (
        <>
            <Avatar />

            <InformationContainer>
                <P>Email: <span>{email}</span></P>
                <P>Created: <span>{created}</span></P>
                <P>Last update: <span>{lastUpd}</span></P>
            </InformationContainer>

            <hr />
        </>
    )
}
