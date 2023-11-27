import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import { useLogin } from './useLogin';
import { LoginBtn } from '../../../styles/Button.style';
import { TLogin } from './login.type';
import ErrorLabel from '../../../components/error/ErrorLabel';
import FooterContainer from './FooterContainer';
import { schema } from './login.schema';
import { Form, Group } from '../Authorizations.style';
import { Header, LoginContainer, StyledInput } from './Login.style';

export default function LogIn() {
    const { login, isLoading } = useLogin();

    const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<TLogin> = (data) => login(data);

    return (
        <LoginContainer>
            <Header>Login</Header>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <>
                    <Group>
                        <label htmlFor="email">Email adress:</label>
                        <StyledInput {...register("email")} type="email" name="email" placeholder="Enter email" disabled={isLoading} />

                        <ErrorLabel errMsg={errors.email?.message} />
                    </Group>

                    <Group>
                        <label htmlFor="password">Password:</label>
                        <StyledInput {...register("password")} type="password" name="password" placeholder="Enter password" disabled={isLoading} />

                        <ErrorLabel errMsg={errors.password?.message} />
                    </Group>
                </>

                <LoginBtn type="submit" disabled={isLoading}>
                    {isLoading ? 'Loging in...' : 'Continue'}
                </LoginBtn>
            </Form>

            <FooterContainer />
        </LoginContainer>
    )
}
