import { useUser } from "../../utils/hooks/useUser";


const ProtectedLayout = ({ children }) => {
    const { user, isAuthenticated } = useUser();
    console.log('CurrUser', user);

    if (isAuthenticated) {
        return children;
    }
    return null;
}
export default ProtectedLayout;