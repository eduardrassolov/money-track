import { useState } from "react";
import { LoginBtn } from "../../styles/Button";
import { styled } from "styled-components";
import { useLogin } from "./useLogin";
import { devices } from "../../styles/breakPoints";
import Logo from "../../components/logo/Logo";

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: start;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2.5rem 1rem;
    
    @media only screen and ${devices.sm}{
    justify-content: center;
    align-items: center;
    }
`

const H1 = styled.h1`
    margin: 0 0 0.5rem;
    padding: 0;
`
const P = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: 409;
    color: #71717A;
    display: flex;
    width: 100%;
    font-weight: 400;
    width: fit-content;
`
const BottomText = styled(P)`
    color: #8f8f8f;
    margin: 1rem auto 0;
    font-size: 0.8rem;
    width: fit-content;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;     
    box-sizing: border-box;
    width: 100%;
    max-width: 550px;
    height: auto;
    margin: 2rem 0;
`
const GropHorizontal = styled.div`
    display: flex;
    margin: 0 0 1.5rem;
    gap: 0.3rem;
`

const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: 0 0 1.5rem;
`
const Input = styled.input`
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #E4E4E7;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
`

export default function Login() {
    const { login, isLoading } = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = ({ target: { value } }) => setEmail(() => value);
    const handlePassword = ({ target: { value } }) => setPassword(() => value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            return;
        }

        login({ email, password });
    }

    return (

        <Div>
            <H1>Login</H1>
            <P>Welcome back. Enter your credentials to access your account</P>
            <LoginForm onSubmit={handleSubmit}>
                <Group>
                    <label htmlFor="email">Email adress:</label>
                    <Input type="email" name="email" value={email} onInput={handleEmail} placeholder="Enter email" required autoComplete="off" />
                </Group>

                <Group>
                    <label htmlFor="password">Password:</label>
                    <Input type="password" name="password" value={password} onInput={handlePassword} placeholder="Enter password" required autoComplete="off" />
                </Group>

                <GropHorizontal>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Keep me signed in</label>
                </GropHorizontal>

                <LoginBtn type="submit" disabled={isLoading}>{isLoading ? 'Loging...' : 'Continue'}</LoginBtn>
                <BottomText>Don't have acount? We are very upset</BottomText>
            </LoginForm>
        </Div>
    )
}
