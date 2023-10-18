import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { LoginBtn } from '../../styles/Button.tsx';
import { apiSignUp } from '../../services/api/apiUser.ts';
import { useNavigate } from 'react-router-dom';

import { BottomText, Form, Group, H1, StyledLink } from '../login/Login.style.ts';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/input/Input.tsx';
import { ErrorP } from '../../components/newTransaction/FormTransaction.style.ts';
import { toast } from 'react-toastify';
import AnimatedContainer from '../../components/animation/AnimatedContainer.tsx';
import { slideLeft } from '../home/HeaderSection.tsx';
import { ROUTES } from '../../config/routes.ts';

export type SignInInputs = {
    email: string,
    password: string,
    repeatPass: string,
    firstName: string,
    lastName: string,
}

const defaultFields: SignInInputs = {
    email: '',
    password: '',
    repeatPass: '',
    firstName: '',
    lastName: ''
}

const signUpSchema = yup.object({
    email: yup.string().email('Email is not valid').required('This field is required'),
    password: yup.string().min(6, 'Min password length 6 characters').required('This field is required'),
    repeatPass: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('This field is required'),
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required('This field is required'),
})

export default function SignUpPage() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<SignInInputs>({
        defaultValues: defaultFields,
        resolver: yupResolver(signUpSchema)
    });

    const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
        const { error } = await apiSignUp(data.email, data.password, data.firstName, data.lastName);

        console.log(data);
        if (error) {
            toast.error(error.message);
            return null;
        }
        navigate(ROUTES.LOGIN);
    }
    const onError: SubmitErrorHandler<SignInInputs> = err => {
        console.log(err);
    }

    return (
        <AnimatedContainer delay={0} duration={0.5} direction={slideLeft}>
            <H1>New profile</H1>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <Group>
                    <label htmlFor="email">Email adress:</label>
                    <Input type={"text"} name={"email"} placeHolder={"Enter email"} register={register} />
                    <ErrorP>{errors.email?.message}</ErrorP>
                </Group>

                <Group>
                    <label htmlFor="password">Password:</label>
                    <Input type={"password"} name={"password"} placeHolder={"Enter password"} register={register} />
                    <ErrorP>{errors.password?.message}</ErrorP>
                </Group>

                <Group>
                    <label htmlFor="repeatPass">Repeat password:</label>
                    <Input type={"password"} name={"repeatPass"} placeHolder={"Confirm password"} register={register} />
                    <ErrorP>{errors.repeatPass?.message}</ErrorP>
                </Group>

                <Group>
                    <label htmlFor="firstName">First name:</label>
                    <Input type={"text"} name={"firstName"} placeHolder={"Enter first name"} register={register} />
                    <ErrorP>{errors.firstName?.message}</ErrorP>
                </Group>

                <Group>
                    <label htmlFor="lastName">Last name:</label>
                    <Input type={"text"} name={"lastName"} placeHolder={"Enter last name"} register={register} />
                    <ErrorP>{errors.lastName?.message}</ErrorP>
                </Group>

                <LoginBtn type="submit">Create</LoginBtn>
                <BottomText>
                    <StyledLink to="/">Home page</StyledLink>
                    <StyledLink to={ROUTES.LOGIN}>Log in</StyledLink>
                </BottomText>
            </Form>
        </AnimatedContainer>
    )
}
