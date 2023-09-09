import { useUser } from "../../utils/hooks/useUser";
import Avatar from "../../components/user/Avatar";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiGetCurrency from "../../services/api/apiGetCurrency";
import { Container, Input, ProfileSection, ReadOnly, Row, Select, SettingsFooter } from "./Settings.style";
import { SubmitHandler, useForm } from "react-hook-form";
import useSettings from "./useSettings";

export type InputsSettings = {
    firstName: string;
    lastName: string;
    currency: string
}

export default function Settings() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutateUser } = useSettings();
    const { user, created, lastUpd, firstName, lastName } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm<InputsSettings>();

    const onSubmit: SubmitHandler<InputsSettings> = data =>
        mutateUser(data, { onSuccess: () => queryClient.invalidateQueries(["user"]) });

    const handleBack = () => navigate(-1);

    const { data: options } = useQuery({ queryKey: ["currency"], queryFn: () => apiGetCurrency() });
    if (!options)
        return;

    return (
        <Container>
            <h1>Settings</h1>
            <p>Profile</p>

            <ProfileSection>
                <Row>
                    <p>Profile Photo</p>
                    <Avatar />
                </Row>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row>
                        <label htmlFor="created">Created</label>
                        <ReadOnly type="text" disabled value={created} />
                    </Row>

                    <Row>
                        <label htmlFor="created">Last updated</label>
                        <ReadOnly type="text" disabled value={lastUpd} />
                    </Row>

                    <Row>
                        <label htmlFor="email" >Email</label>
                        <ReadOnly type="email" disabled defaultValue={user?.email} />
                    </Row>

                    <Row>
                        <label htmlFor="firstName">First name</label>
                        <Input type="text" {...register("firstName")} defaultValue={firstName} />
                    </Row>

                    <Row>
                        <label htmlFor="lastName">Last name</label>
                        <Input type="text" {...register("lastName")} defaultValue={lastName} />
                    </Row>

                    <Row>
                        <label htmlFor="currency">Currency</label>
                        <Select {...register("currency")} defaultValue={user?.user_metadata.currency}>
                            {options.map((currency) => <option key={currency.id} value={currency.id} >{currency.name}</option>)}
                        </Select>
                    </Row>

                    <SettingsFooter>
                        <SecondaryBtn onClick={handleBack}>Cancel</SecondaryBtn>
                        <PrimaryBtn type="submit">Save</PrimaryBtn>
                    </SettingsFooter>
                </form>

            </ProfileSection>
        </Container>
    )
}
