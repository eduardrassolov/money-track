import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import FormRow from '../../../../components/newTransaction/FormRow'
import SettingsFooter from '../../footer/SettingsFooter';
import Input from '../../../../components/input/Input';
import ErrorLabel from '../../../../components/error/ErrorLabel';
import { Form, P } from './ProfileTab.style';
import useSettings from '../../useSettings';

export type InputsProfile = {
    firstName: string,
    lastName: string
};

const settingsSchema: yup.ObjectSchema<InputsProfile> = yup.object().shape({
    firstName: yup.string().required("First name is required").min(3, "First name must be at least 3 characters long"),
    lastName: yup.string().required("Last name is required").min(3, "Last name must be at least 3 characters long"),
});

export default function ProfileTab({ firstName, lastName }: InputsProfile) {
    const { updateUserData } = useSettings();

    const { register, handleSubmit, formState: { errors } } = useForm<InputsProfile>({
        resolver: yupResolver(settingsSchema),
        defaultValues: { firstName, lastName }
    });

    const onSubmit: SubmitHandler<InputsProfile> = (data) => {
        const { firstName, lastName } = data;
        updateUserData({ firstName, lastName });
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