import { useUser } from "../../utils/hooks/useUser";
import { P, ProfileContainer } from "./Profile.style";
import Avatar from "./avatar/Avatar";

export default function Profile() {
    const { user } = useUser();
    return (
        <ProfileContainer>
            <P>{user?.user_metadata.firstName}</P>

            <Avatar />
        </ProfileContainer>
    );
}
