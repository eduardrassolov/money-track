import { LoginBtn } from "../../styles/Button";
import { useLogin } from "./useLogin";
import { BottomText, Form, Group, H1, StyledLink } from "./Login.style.ts";
import useTheme from "../../utils/hooks/useTheme.tsx";
import styled, { ThemeProvider } from "styled-components";
import * as yup from 'yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/input/Input.tsx";
import { ErrorP } from "../../components/newTransaction/FormTransaction.style.ts";


const schema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required'),
})

export interface ILoginInputs {
    email: string;
    password: string;
}

const StyledLogin = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    img{
        width: 100%;
        max-width: 700px;
    }
`
const LoginSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LoginPage = () => {
    const { login, isLoading } = useLogin();
    const { theme } = useTheme();

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<ILoginInputs> = async (data) => login(data);
    return (
        <ThemeProvider theme={theme}>
            <StyledLogin>
                <ImageContainer>
                    <img src="login.svg" />
                </ImageContainer>

                <LoginSection>
                    <H1>Login</H1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Group>
                            <label htmlFor="email">Email adress:</label>

                            <Input type="email" name="email" placeHolder="Enter email" register={register} />
                            <ErrorP>{errors.email?.message}</ErrorP>
                        </Group>

                        <Group>
                            <label htmlFor="password">Password:</label>

                            <Input type="password" name="password" placeHolder="Enter password" register={register} />
                            <ErrorP>{errors.password?.message}</ErrorP>

                        </Group>

                        <LoginBtn type="submit" disabled={isLoading}>{isLoading ? 'Loging...' : 'Continue'}</LoginBtn>

                        <BottomText>
                            <span>Don't have acount? </span>
                            <StyledLink to="/sign-up">Sign Up</StyledLink>
                            <span>or</span>
                            <StyledLink to="/sign-up">Login as a guest</StyledLink>
                        </BottomText>

                        <BottomText><StyledLink to="/">Home page</StyledLink></BottomText>
                    </Form>
                </LoginSection>
            </StyledLogin>
        </ThemeProvider>
    )
}
export default LoginPage;
