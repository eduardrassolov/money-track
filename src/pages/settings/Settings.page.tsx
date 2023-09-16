import { useUser } from "../../utils/hooks/useUser";
import Avatar from "../../components/user/Avatar";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiGetCurrency from "../../services/api/apiGetCurrency";
import { SettingsFooter } from "./Settings.style";
import { SubmitHandler, useForm } from "react-hook-form";
import useSettings from "./useSettings";
import FormRow from "../../components/newTransaction/FormRow";
import Input from "../../components/input/Input";
import styled from "styled-components";
import Select from "../../components/dropDown/Select";
import { devices } from "../../styles/breakPoints";
import { QUERY_KEY } from "../../config/queryClientKeys";
import * as yup from "yup";
import { ErrorP } from "../../components/newTransaction/FormTransaction.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { set } from "date-fns";

export type InputsSettings = {
    id?: number;
    firstName: string;
    lastName: string;
    currency: string
    name?: string
}

const P = styled.p`
    margin: 0.5rem 0;

`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    border-radius: 15px;
    transition: all 300ms;
    gap: 2rem;

    hr{
        width: 100%;
        margin: 0;
        padding: 0;
        border: none;
        border-top: 1px solid ${props => props.theme.border};
    }

    @media only screen and (min-width: ${devices.sm}px){
        min-width: 450px;
    }
`
const InformationContainer = styled.div`    
    span{
        color: gray;
    }
`
export const SectionFull = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    padding: 4rem 2rem;
    transition: all 300ms;
`

const settingsSchema = yup.object({
    firstName: yup.string().required("First name is required").min(3, "First name must be at least 3 characters long"),
    lastName: yup.string().required("Last name is required").min(3, "Last name must be at least 3 characters long"),

})

export default function Settings() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutateUser } = useSettings();
    const { user, created, lastUpd, firstName, lastName } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm<InputsSettings>({
        resolver: yupResolver(settingsSchema),
        defaultValues: {
            firstName, lastName, currency: user?.user_metadata.currency
        }
    });

    const onSubmit: SubmitHandler<InputsSettings> = data =>
        mutateUser(data, { onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER]) });

    const handleBack = () => navigate(-1);

    const { data: options } = useQuery({ queryKey: [QUERY_KEY.CURRENCY], queryFn: () => apiGetCurrency() });
    if (!options)
        return;

    return (
        <SectionFull>
            <Container>
                <Avatar />

                <hr />

                <InformationContainer>
                    <P>Email: <span>{user?.email}</span></P>
                    <P>Created: <span>{created}</span></P>
                    <P>Last update: <span>{lastUpd}</span></P>
                </InformationContainer>

                <hr />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormRow lblFor="firstName" lblText="First name">
                        <Input type="text" register={register} name={"firstName"} />
                        <ErrorP>{errors.firstName?.message}</ErrorP>
                    </FormRow>

                    <FormRow lblFor="lastName" lblText="Last name">
                        <Input type="text" register={register} name={"lastName"} />
                        <ErrorP>{errors.lastName?.message}</ErrorP>
                    </FormRow>

                    <FormRow lblFor="currency" lblText="Currency">
                        <Select options={options} register={register} name={"currency"} ></Select>
                    </FormRow>


                    <SettingsFooter>
                        <SecondaryBtn onClick={handleBack}>Cancel</SecondaryBtn>
                        <PrimaryBtn type="submit">Save</PrimaryBtn>
                    </SettingsFooter>
                </form>
            </Container>
        </SectionFull >
    )
}
