
import Input from '../../../components/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from './useLogin';
import AnimatedContainer from '../../../components/animation/AnimatedContainer';
import { slideRight } from '../../../config/animationCfg';
import { LoginBtn } from '../../../styles/Button.style';
import { TLogin } from './login.type';
import HeaderText from '../../../components/Header/HeaderText';
import ErrorLabel from '../../../components/error/ErrorLabel';
import FooterContainer from './FooterContainer';
import { schema } from './schema';
import { Form, Group } from '../Authorizations.style';


export default function LogIn() {
    const { login, isLoading } = useLogin();

    const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<TLogin> = (data) => login(data);

    return (
        <AnimatedContainer delay={0} duration={0.5} direction={slideRight}>
            <HeaderText text="Login" />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Group>
                    <label htmlFor="email">Email adress:</label>
                    <Input type="email" name="email" placeHolder="Enter email" register={register} />

                    <ErrorLabel errMsg={errors.email?.message} />
                </Group>

                <Group>
                    <label htmlFor="password">Password:</label>
                    <Input type="password" name="password" placeHolder="Enter password" register={register} />

                    <ErrorLabel errMsg={errors.password?.message} />

                </Group>

                <LoginBtn type="submit" disabled={isLoading}>
                    {isLoading ? 'Loging in...' : 'Continue'}
                </LoginBtn>

                <FooterContainer />

            </Form>
        </AnimatedContainer>
    )
}
