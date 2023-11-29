import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import FormRow from "../../../../components/newTransaction/FormRow";
import SettingsFooter from "../../footer/SettingsFooter";
import Select from "../../../../components/dropDown/Select";
import apiGetCurrency from "../../../../services/api/apiGetCurrency";
import LoadingUi from "../../../../components/spinner/LoadingUi";
import ErrorLabel from "../../../../components/error/ErrorLabel";

import { Form, P } from "../profileSettingsTab/ProfileTab.style";
import useSettings from "../../useSettings";
import { Input } from "./ApplicationTab.style";

type ApplicationTabProps = {
    userId: string;
    currencyId: string;
    itemsPerPage: number;
};

export type AppSettingsInputs = {
    itemsPerPage: number;
    defaultCurrencyId: string;
};

export default function ApplicationTab({ userId, currencyId, itemsPerPage }: ApplicationTabProps) {
    const { updateSettings } = useSettings();

    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });

    const { register, handleSubmit } = useForm<AppSettingsInputs>({
        defaultValues: {
            defaultCurrencyId: currencyId,
            itemsPerPage: itemsPerPage,
        },
    });

    const onSubmit: SubmitHandler<AppSettingsInputs> = (data) => {
        const { defaultCurrencyId, itemsPerPage } = data;

        const newData: AppSettingsInputs = { defaultCurrencyId, itemsPerPage };
        console.log(newData);
        updateSettings({ userId, newData });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <P>
                Make changes to your application here.
                <br /> Click save when you're done.
            </P>

            <FormRow lblFor="itemsPerPage" lblText="Show transactions per page">
                <Input {...register("itemsPerPage")} type={"number"} autoFocus />
                <ErrorLabel />
            </FormRow>

            <FormRow lblFor="currency" lblText="Currency by default">
                {isCurrencyLoading ? (
                    <LoadingUi />
                ) : (
                    <Select options={optionCurrency} selectedDefault={currencyId} register={register} name={"defaultCurrencyId"}></Select>
                )}
                <ErrorLabel />
            </FormRow>

            <SettingsFooter />
        </Form>
    );
}
