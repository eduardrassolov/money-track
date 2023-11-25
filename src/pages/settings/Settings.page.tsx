import { useUser } from "../../utils/hooks/useUser";
import SettingsHeader from "./SettingsHeader";

import ProfileTab from "./ProfileTab";
import ApplicationTab from "./ApplicationTab";
import { useState } from "react";
import TabsList from "./TabsList";
import { useQuery } from "@tanstack/react-query";
import { apiGetUserSettings } from "../../services/api/apiGetUserSettings";
import { Container, Section } from "./Settings.page.style";

export type InputsSettings = {
    id?: number;
    firstName: string;
    lastName: string;
    currency: string
    name?: string
}

export default function Settings() {
    const { user, created, lastUpd, firstName, lastName } = useUser();

    if (!user) {
        return null;
    }

    const { data: userSettings } = useQuery({
        queryKey: ["userSettings"],
        queryFn: () => apiGetUserSettings(user.id)
    })

    const [activeTab, setActiveTab] = useState("profileTab");
    const handleTab = (tabName: string) => setActiveTab(() => tabName);
    return (
        <Section>
            <Container>
                <SettingsHeader email={user.email as string} created={created} lastUpd={lastUpd} />

                <TabsList activeTab={activeTab} onChangeTab={handleTab} />

                {activeTab === "profileTab" ? <ProfileTab firstName={firstName} lastName={lastName} /> : ""}
                {activeTab === "applicationTab" ? <ApplicationTab itemsPerPage={userSettings?.itemsPerPage || 10} currencyId={userSettings?.defaultCurrency?.id || ""} /> : ""}

            </Container>
        </Section >
    )
}
