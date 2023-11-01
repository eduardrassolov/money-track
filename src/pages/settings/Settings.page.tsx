import { useUser } from "../../utils/hooks/useUser";
import Avatar from "../../components/user/Avatar";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiGetCurrency from "../../services/api/apiGetCurrency";
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
import SettingsHeader from "./SettingsHeader";
import SettingsFooter from "./SettingsFooter";
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
    gap: 2rem;

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
    const navigate = useNavigate();
    const { user, created, lastUpd, firstName, lastName, currency } = useUser();

    const handleBack = () => navigate(-1);



    const [activeTab, setActiveTab] = useState("profileTab");
    const handleTab = (tabName: string) => setActiveTab(() => tabName);
    return (
        <SectionFull>
            <Container>
                <SettingsHeader email={user?.email} created={created} lastUpd={lastUpd} />

                <TabsList activeTab={activeTab} onChangeTab={handleTab}>

                    {activeTab === "profileTab" ? <ProfileTab firstName={firstName} lastName={lastName} /> : ""}
                    {activeTab === "applicationTab" ? <ApplicationTab currencyId={currency} /> : ""}


                    {/* 

                    <FormRow lblFor="currency" lblText="Currency">
                        <Select options={options} register={register} name={"currency"} ></Select>
                    </FormRow>

                    <SettingsFooter />

                </form> */}
            </Container>
        </SectionFull >
    )
}
