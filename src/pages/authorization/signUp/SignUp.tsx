import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AnimatedContainer from '../../../components/animation/AnimatedContainer.tsx';
import Input from '../../../components/input/Input.tsx';

import { apiSignUp } from '../../../services/api/apiUser.ts';

import { ROUTES } from '../../../config/routes.ts';
import { slideLeft } from '../../../config/animationCfg.ts';
import { LoginBtn } from '../../../styles/Button.style.ts';
import { TSignUp } from './signUp.type.ts';
import { signUpSchema } from './schema.ts';
import ErrorLabel from '../../../components/error/ErrorLabel.tsx';
import HeaderText from '../../../components/Header/HeaderText.tsx';
import { BottomText } from '../login/FooterContainer.tsx';
import { Form, Group, StyledLink } from '../Authorizations.style.ts';

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
        <AnimatedContainer delay={0} duration={0.5} direction={slideLeft}>
            <HeaderText text={"New profile"} />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Group>
                    <label htmlFor="email">Email adress:</label>
                    <Input type={"text"} name={"email"} placeHolder={"Enter email"} register={register} />

                    <ErrorLabel errMsg={errors.email?.message} />
                </Group>

                <Group>
                    <label htmlFor="password">Password:</label>
                    <Input type={"password"} name={"password"} placeHolder={"Enter password"} register={register} />

                    <ErrorLabel errMsg={errors.password?.message} />
                </Group>

                <Group>
                    <label htmlFor="repeatPass">Repeat password:</label>
                    <Input type={"password"} name={"repeatPass"} placeHolder={"Confirm password"} register={register} />

                    <ErrorLabel errMsg={errors.repeatPass?.message} />
                </Group>

                <Group>
                    <label htmlFor="firstName">First name:</label>
                    <Input type={"text"} name={"firstName"} placeHolder={"Enter first name"} register={register} />

                    <ErrorLabel errMsg={errors.firstName?.message} />
                </Group>

                <Group>
                    <label htmlFor="lastName">Last name:</label>
                    <Input type={"text"} name={"lastName"} placeHolder={"Enter last name"} register={register} />

                    <ErrorLabel errMsg={errors.lastName?.message} />
                </Group>

                <LoginBtn type="submit">Create</LoginBtn>

                <BottomText>
                    <StyledLink to="/">Home page</StyledLink>
                    <StyledLink to={ROUTES.LOGIN}>Log in</StyledLink>
                </BottomText>
            </Form>
        </AnimatedContainer >
    )
}
