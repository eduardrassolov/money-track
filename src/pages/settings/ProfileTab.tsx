import { SubmitHandler, useForm } from 'react-hook-form';
import FormRow from '../../components/newTransaction/FormRow'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import SettingsFooter from './SettingsFooter';
import Input from '../../components/input/Input';
import { useMutation } from '@tanstack/react-query';
import apiUpdateProfileData from '../../services/api/apiUpdateProfileData';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ErrorLabel from '../../components/error/ErrorLabel';

type InputsProfile = {
    firstName: string,
    lastName: string
};

const settingsSchema: yup.ObjectSchema<InputsProfile> = yup.object().shape({
    firstName: yup.string().required("First name is required").min(3, "First name must be at least 3 characters long"),
    lastName: yup.string().required("Last name is required").min(3, "Last name must be at least 3 characters long"),
});

export const P = styled.p`
    font-size: 1rem;
    color: gray;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export default function ProfileTab({ firstName, lastName }: InputsProfile) {
    const { register, handleSubmit, formState: { errors } } = useForm<InputsProfile>({
        resolver: yupResolver(settingsSchema),
        defaultValues: { firstName, lastName }
    });
    const { mutate: updateUser } = useMutation({
        mutationFn: apiUpdateProfileData,
        onSuccess: () => toast.success("Successfull updated"),
        onError: (err) => {
            toast.error("Something gone wrong");
            console.log(err);
        }
    })

    const onSubmit: SubmitHandler<InputsProfile> = (data) => {
        const { firstName, lastName } = data;
        updateUser({ firstName, lastName });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <P>Make changes to your account here.<br /> Click save when you're done.</P>

            <FormRow lblFor="firstName" lblText="First name">
                <Input type="text" register={register} name={"firstName"} autoFocus />
                <ErrorLabel errMsg={errors.firstName?.message} />
            </FormRow>

            <FormRow lblFor="lastName" lblText="Last name">
                <Input type="text" register={register} name={"lastName"} />
                <ErrorLabel errMsg={errors.lastName?.message} />
            </FormRow>

            <SettingsFooter />

        </Form>
    )

}