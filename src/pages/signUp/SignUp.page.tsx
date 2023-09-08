import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { LoginBtn } from '../../styles/Button';
import { ErrorMessage } from '@hookform/error-message';
import { ThemeProvider, styled } from 'styled-components';
import { apiSignUp } from '../../services/api/apiUser';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router';
import { toast } from 'react-toastify';
import { BottomText, Div, Form, Group, H1, Input, StyledLink } from '../login/Login.style.ts';
import useTheme from '../../utils/hooks/useTheme.tsx';

type Inputs = {
    email: string,
    password: string,
    repeatPass: string,
    firstName: string,
    lastName: string,
}

const defaultFields: Inputs = {
    email: '',
    password: '',
    repeatPass: '',
    firstName: '',
    lastName: ''
}

const StyledError = styled.p`
    /* color: #b91c1c; */
    color: ${props => props.theme.error};
    margin: 0.2rem 0;
    font-size: 0.8rem;
`

export default function SignUp() {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<Inputs>({
        mode: "onSubmit",
        defaultValues: defaultFields
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { error } = await apiSignUp(data.email, data.password, data.firstName, data.lastName);

        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("Welcome")
        navigate(ROUTES.DASHBOARD);
    }
    const onError: SubmitErrorHandler<Inputs> = err => {
        console.log(err);
    }

    return (
        <ThemeProvider theme={theme}>
            <Div>
                <H1>New profile</H1>
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Group>
                        <label htmlFor="email">Email adress:</label>
                        <ErrorMessage errors={errors} name="email" render={({ message }) => <StyledError>{message}</StyledError>} />
                        <Input type="text" {...register("email",
                            {
                                required: "This field is required",
                                pattern:
                                {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Email is not valid.'
                                }
                            })} placeholder="Enter email" autoComplete="off" autoFocus />
                    </Group>

                    <Group>
                        <label htmlFor="password">Password:</label>
                        <ErrorMessage errors={errors} name="password" render={({ message }) => <StyledError>{message}</StyledError>} />
                        <Input type="password" {...register("password", {
                            required: "This field is required",
                            minLength: {
                                value: 6,
                                message: "Min password length 6 characters"
                            }
                        })} placeholder="Enter password" autoComplete="off" />
                    </Group>

                    <Group>
                        <label htmlFor="repeatPass">Repeat password:</label>
                        <ErrorMessage errors={errors} name="repeatPass" render={({ message }) => <StyledError>{message}</StyledError>} />
                        <Input type="password" {...register("repeatPass", {
                            required: "This field is required",
                            minLength: {
                                value: 6,
                                message: "Min password length 6 characters"
                            },
                            validate: (value) => value === getValues().password || "Passwords don't match. Try again."
                        })} placeholder="Repeat password" autoComplete="off" />
                    </Group>

                    <Group>
                        <label htmlFor="firstName">First name:</label>
                        <ErrorMessage errors={errors} name="firstName" render={({ message }) => <StyledError>{message}</StyledError>} />
                        <Input type="text" {...register("firstName", {
                            required: "This field is required",
                            pattern: {
                                value: /^[A-Za-z'-]+$/,
                                message: "First name is invalid"
                            }
                        }
                        )} placeholder="Enter firstname" autoComplete="off" />
                    </Group>

                    <Group>
                        <label htmlFor="lastName">Last name:</label>
                        <ErrorMessage errors={errors} name="lastName" render={({ message }) => <StyledError>{message}</StyledError>} />
                        <Input type="text" {...register("lastName", {
                            required: "This field is required", pattern: {
                                value: /^[A-Za-z'-]+$/,
                                message: "First name is invalid"
                            }
                        })} placeholder="Enter lastname" autoComplete="off" />
                    </Group>



                    <LoginBtn type="submit">Create</LoginBtn>
                    <BottomText><StyledLink to="/">Home page</StyledLink></BottomText>
                </Form>
            </Div >
        </ThemeProvider>
    )
}
