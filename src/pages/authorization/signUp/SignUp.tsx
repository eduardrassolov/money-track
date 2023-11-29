import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { apiSignUp } from '../../../services/api/apiUser.ts';

import { ROUTES } from '../../../config/routes.ts';
import { TSignUp } from './signUp.type.ts';
import { signUpSchema } from './schema.ts';
import ErrorLabel from '../../../components/error/ErrorLabel.tsx';
import { BottomText } from '../login/FooterContainer.tsx';
import { Form, Group, Input, StyledLink } from '../Authorizations.style.ts';
import { Header } from '../login/Login.style.ts';
import { RegisterBtn, StyledDiv } from './SignUp.style.ts';

const defaultValues: TSignUp = {
    email: "",
    password: "",
    repeatPass: "",
    firstName: "",
    lastName: ""
}

export default function SignUpPage() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<TSignUp>({ defaultValues, resolver: yupResolver(signUpSchema) });

    const onSubmit: SubmitHandler<TSignUp> = async (data) => {
        const { error } = await apiSignUp(data.email, data.password, data.firstName, data.lastName);

        if (error) {
            toast.error(error.message);
            return null;
        }
        navigate(ROUTES.LOGIN);
    }

    return (
        <StyledDiv>
            <Header>New Profile</Header>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Group>
                    <label htmlFor="email">Email adress:</label>
                    <Input type={"text"} placeholder={"Enter email"} {...register("email")} />

                    <ErrorLabel errMsg={errors.email?.message} />
                </Group>

                <Group>
                    <label htmlFor="password">Password:</label>
                    <Input type={"password"} placeholder={"Enter password"} {...register("password")} />

                    <ErrorLabel errMsg={errors.password?.message} />
                </Group>

                <Group>
                    <label htmlFor="repeatPass">Repeat password:</label>
                    <Input type={"password"} placeholder={"Confirm password"} {...register("repeatPass")} />

                    <ErrorLabel errMsg={errors.repeatPass?.message} />
                </Group>

                <Group>
                    <label htmlFor="firstName">First name:</label>
                    <Input type={"text"} placeholder={"Enter first name"} {...register("firstName")} />

                    <ErrorLabel errMsg={errors.firstName?.message} />
                </Group>

                <Group>
                    <label htmlFor="lastName">Last name:</label>
                    <Input type={"text"} placeholder={"Enter last name"} {...register("lastName")} />

                    <ErrorLabel errMsg={errors.lastName?.message} />
                </Group>

                <RegisterBtn type="submit">Create</RegisterBtn>

                <BottomText>
                    <StyledLink to="/">Home page</StyledLink>
                    <StyledLink to={ROUTES.LOGIN}>Log in</StyledLink>
                </BottomText>
            </Form>
        </StyledDiv>
    )
}
