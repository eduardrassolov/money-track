import { LoginBtn } from "../../styles/Button";
import { useLogin } from "./useLogin";
import Hints from "./Hints";
import { BottomText, Div, Form, GropHorizontal, Group, H1, P, StyledLink } from "./Login.style.ts";
import useTheme from "../../utils/hooks/useTheme.tsx";
import { ThemeProvider } from "styled-components";
import * as yup from 'yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/input/Input.tsx";
import { ErrorP } from "../../components/newTransaction/FormTransaction.style.ts";

const schema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required'),
})

interface ILoginInputs {
    email: string;
    password: string;
}

const Login = () => {
    const { login, isLoading } = useLogin();
    const { theme } = useTheme();

    const {register, handleSubmit, formState: { errors } } = useForm<ILoginInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<ILoginInputs> = async (data) => login(data);

    return (
        <ThemeProvider theme={theme}>
            <Div>
                <H1>Login</H1>
                <P>Availibale 2 accounts for test</P>
                <GropHorizontal>
                    <Hints />
                </GropHorizontal>

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
                    <BottomText>Don't have acount? <StyledLink to="/sign-up">Sign Up</StyledLink></BottomText>

                    <BottomText><StyledLink to="/">Home page</StyledLink></BottomText>
                </Form>
            </Div>
        </ThemeProvider>
    )
}
export default Login;
