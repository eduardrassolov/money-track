import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useUser } from "../../utils/hooks/useUser";
import SettingsHeader from "./header/SettingsHeader";
import ProfileTab from "./tabs/profileSettingsTab/ProfileTab";
import ApplicationTab from "./tabs/appSettingsTab/ApplicationTab";
import TabsList from "./tabs/TabsList";
import { apiGetUserSettings } from "./apiGetUserSettings";
import { Container, Section } from "./Settings.page.style";
import { tabListData } from "./tabs/tabsListData";

export type InputsSettings = {
    id?: number;
    firstName: string;
    lastName: string;
    currency: string
    name?: string
}

export default function Settings() {
    const { user, created, firstName, lastName } = useUser();

    if (!user) {
        return null;
    }

    const { data: userSettings } = useQuery({
        queryKey: ["userSettings"],
        queryFn: () => apiGetUserSettings(user.id)
    });

    const [{ id: defaultTab }] = tabListData;
    const [activeTab, setActiveTab] = useState(defaultTab);
    const handleTab = (tabName: string) => setActiveTab(tabName);

    return (
        <Section>
            <Container>
                <SettingsHeader email={user.email as string} created={created} />

                <TabsList activeTab={activeTab} onChangeActiveTab={handleTab} />

                {activeTab === "profileTab" ? <ProfileTab firstName={firstName} lastName={lastName} /> : ""}
                {activeTab === "applicationTab" ? <ApplicationTab userId={user.id} itemsPerPage={userSettings?.itemsPerPage || 10} currencyId={userSettings?.defaultCurrency?.id || ""} /> : ""}

            </Container>
        </Section >
    )
}
