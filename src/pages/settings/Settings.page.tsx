import { useUser } from "../../utils/hooks/useUser";
import Avatar from "../../components/user/Avatar";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import updateUser from "../../services/updateUser";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiGetCurrency from "../../services/api/apiGetCurrency";
import { Container, Input, ProfileSection, ReadOnly, Row, Select, SettingsFooter } from "./Settings.style";

export default function Settings() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { user, created, lastUpd, firstName, lastName } = useUser();

    const [firstNameInput, setFirstName] = useState<string>(firstName || '');
    const [lastNameInput, setLastName] = useState<string>(lastName || '');
    const [currencyInput, setCurrency] = useState<string>(user?.user_metadata.currency || '');

    const { mutate: mutateUser } = useMutation({
        mutationFn: () => updateUser(firstNameInput, lastNameInput, currencyInput),
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
            toast.success("User updated succesfully.");
        },
        onError: () => toast.error("Something went wrong, try again.")
    })

    const handleFirstName = (e: React.FormEvent<HTMLInputElement>) => setFirstName(() => e.target.value);
    const handleLastName = (e: React.FormEvent<HTMLInputElement>) => setLastName(() => e.target.value);
    const handleCurrency = (e: React.FormEvent<HTMLSelectElement>) => setCurrency(e.target.value)

    const handleBack = () => navigate(-1);


    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        mutateUser();
    }

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
                <form onSubmit={handleSubmit}>

                    <Row>
                        <label htmlFor="created">Created</label>
                        <ReadOnly type="text" disabled defaultValue={created} />
                    </Row>

                    <Row>
                        <label htmlFor="created">Last updated</label>
                        <ReadOnly type="text" disabled defaultValue={lastUpd} />
                    </Row>

                    <Row>
                        <label htmlFor="email" >Email</label>
                        <ReadOnly type="email" disabled defaultValue={user?.email} />
                    </Row>

                    <Row>
                        <label htmlFor="firstName">First name</label>
                        <Input type="text" value={firstNameInput} onInput={handleFirstName} />
                    </Row>

                    <Row>
                        <label htmlFor="lastName">Last name</label>
                        <Input type="text" value={lastNameInput} onInput={handleLastName} />
                    </Row>

                    <Row>
                        <label htmlFor="currency">Currency</label>
                        <Select name="currency" onChange={handleCurrency} value={currencyInput}>
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
