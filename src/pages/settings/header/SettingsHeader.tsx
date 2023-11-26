import Avatar from '../../../components/user/Avatar';
import { InformationContainer, P } from './SettingsHeader.style';

interface ISettingsHeader {
    email: string,
    created: string,
}

export default function SettingsHeader({ email, created }: ISettingsHeader) {
    return (
        <>
            <Avatar />

            <InformationContainer>
                <P>Email: <span>{email}</span></P>
                <P>Created: <span>{created}</span></P>
            </InformationContainer>

            <hr />
        </>
    )
}
