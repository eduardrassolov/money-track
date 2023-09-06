import { useState } from "react";
import { LoginBtn } from "../../styles/Button";
import { styled } from "styled-components";
import { useLogin } from "./useLogin";
import { devices } from "../../styles/breakPoints";

import Hints from "./Hints";
import { NavLink } from "react-router-dom";


export const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: start;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2.5rem 1rem;
    

    @media only screen and (min-width: ${devices.sm}px){
        justify-content: center;
        align-items: center;
    }
`

export const H1 = styled.h1`
    margin: 0 0 0.5rem;
    padding: 0;
`
export const P = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: 409;
    color: #71717A;
    display: flex;
    width: 100%;
    font-weight: 400;
    width: fit-content;
`
export const BottomText = styled(P)`
    color: #8f8f8f;
    margin: 1rem auto 0;
    font-size: 0.8rem;
    width: fit-content;
    gap: 0.5rem;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;     
    box-sizing: border-box;
    width: 100%;
    max-width: 550px;
    height: auto;
    margin: 2rem 0;
    padding: 0 0 1rem;
`
export const GropHorizontal = styled.div`
    display: flex;
    margin: 0 0 1.5rem;
    gap: 0.3rem;
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: 0 0 1.5rem;
`
export const Input = styled.input`
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #E4E4E7;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
        transition: all 300ms ease-in-out;

    &:focus{
        transition: all 300ms ease-in-out;
        outline: none;
        border: 1px solid #3b82f6;
    }
`
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: 0.8rem;
    color: #5b617d;
    
    &:visited{
        color: #5b617d;
    }
`

export default function Login() {
    const { login, isLoading } = useLogin();

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
    )
}
