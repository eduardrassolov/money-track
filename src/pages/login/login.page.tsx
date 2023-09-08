import { useState } from "react";
import { LoginBtn } from "../../styles/Button";
import { useLogin } from "./useLogin";
import Hints from "./Hints";
import { BottomText, Div, Form, GropHorizontal, Group, H1, Input, P, StyledLink } from "./Login.style.ts";
import useTheme from "../../utils/hooks/useTheme.tsx";
import { ThemeProvider } from "styled-components";


const Login = () => {
    const { login, isLoading } = useLogin();
    const { theme } = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setEmail(() => value);
    const handlePassword = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setPassword(() => value);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            return;
        }

        login({ email, password });
    }

    return (
        <ThemeProvider theme={theme}>
            <Div>
                <H1>Login</H1>
                <P>Availibale 2 accounts for test</P>
                <GropHorizontal>
                    <Hints />
                </GropHorizontal>

                <Form onSubmit={handleSubmit}>
                    <Group>
                        <label htmlFor="email">Email adress:</label>
                        <Input type="email" name="email" value={email} onInput={handleEmail} placeholder="Enter email" required autoComplete="off" />
                    </Group>

                    <Group>
                        <label htmlFor="password">Password:</label>
                        <Input type="password" name="password" value={password} onInput={handlePassword} placeholder="Enter password" required autoComplete="off" />
                    </Group>

                    <LoginBtn type="submit" disabled={isLoading}>{isLoading ? 'Loging...' : 'Continue'}</LoginBtn>
                    <BottomText>Don't have acount? <StyledLink to="/sign-up">Sign Up</StyledLink></BottomText>

                    <BottomText><StyledLink to="/">Home page</StyledLink></BottomText>
                </Form>
            </Div>
        </ThemeProvider>
    )
}
export default Login;
