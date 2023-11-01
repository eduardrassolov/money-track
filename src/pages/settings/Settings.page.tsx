import { useUser } from "../../utils/hooks/useUser";
import styled from "styled-components";
import { devices } from "../../styles/breakPoints";
import SettingsHeader from "./SettingsHeader";
import ProfileTab from "./ProfileTab";
import ApplicationTab from "./ApplicationTab";
import { useState } from "react";
import TabsList from "./TabsList";

export type InputsSettings = {
    id?: number;
    firstName: string;
    lastName: string;
    currency: string
    name?: string
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem;
    border-radius: 15px;
    transition: all 300ms;
    gap: 1rem;

    hr{
        width: 100%;
        margin: 0;
        padding: 0;
        border: none;
        border-top: 1px solid ${props => props.theme.border};
    }

    @media only screen and (min-width: ${devices.sm}px){
        max-width: 500px;
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

export default function Settings() {
    const { user, created, lastUpd, firstName, lastName, currency } = useUser();

    const [activeTab, setActiveTab] = useState("profileTab");
    const handleTab = (tabName: string) => setActiveTab(() => tabName);
    return (
        <SectionFull>
            <Container>
                <SettingsHeader email={user?.email} created={created} lastUpd={lastUpd} />

                <TabsList activeTab={activeTab} onChangeTab={handleTab} />

                {activeTab === "profileTab" ? <ProfileTab firstName={firstName} lastName={lastName} /> : ""}
                {activeTab === "applicationTab" ? <ApplicationTab currencyId={currency} /> : ""}

            </Container>
        </SectionFull >
    )
}
