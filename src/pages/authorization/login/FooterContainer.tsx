import styled from 'styled-components';

import { ROUTES } from '../../../config/routes';
import { useLogin } from './useLogin';
import { StyledLink } from '../Authorizations.style';

const P = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 409;
  color: #71717a;
  display: flex;
  width: 100%;
  font-weight: 400;
  width: fit-content;
`;

export const BottomText = styled(P)`
  color: #8f8f8f;
  margin: 0.5rem auto;
  font-size: 0.8rem;
  width: fit-content;
  gap: 0.5rem;
`;

export default function FooterContainer() {
    const { login } = useLogin();

    function handleClickDemo() {
        login({ email: import.meta.env.VITE_DEMO_LOGIN, password: import.meta.env.VITE_DEMO_PASS });
    }

    return (
        <div>
            <BottomText>
                <span>Don't have acount?</span>
                <StyledLink to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
                <span>or</span>

                <StyledLink to={""} onClick={handleClickDemo}>test account</StyledLink>
            </BottomText>

            <BottomText>
                <StyledLink to="/">Home page</StyledLink>
            </BottomText>
        </div>
    )
}
