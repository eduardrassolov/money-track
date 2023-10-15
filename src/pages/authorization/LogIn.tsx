import styled from 'styled-components';
import { BottomText, Form, Group, H1, StyledLink } from '../login/Login.style';
import Input from '../../components/input/Input';
import { ErrorP } from '../../components/newTransaction/FormTransaction.style';
import { LoginBtn } from '../../styles/Button';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from '../login/useLogin';
import { ROUTES } from '../../router';
import AnimatedContainer from '../../components/animation/AnimatedContainer';
import { slideRight } from '../home/HeaderSection';
import { useEffect, useLayoutEffect } from 'react';
import supabase from '../../services/supabase';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required'),
});
export interface ILoginInputs {
    email: string;
    password: string;
};

export default function LogIn() {
    const { login, isLoading } = useLogin();

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<ILoginInputs> = async (data) => login(data);

    return (
        <AnimatedContainer delay={0} duration={0.5} direction={slideRight}>
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
                    <StyledLink to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
                    <span>or</span>
                    <StyledLink to={ROUTES.SIGN_UP}>Demo</StyledLink>
                </BottomText>

                <BottomText><StyledLink to="/">Home page</StyledLink></BottomText>
            </Form>
        </AnimatedContainer>
    )
}