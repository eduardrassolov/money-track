import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useMutation, useQuery } from '@tanstack/react-query';

import FormRow from '../../components/newTransaction/FormRow';
import SettingsFooter from './SettingsFooter';
import Select from '../../components/dropDown/Select';
import apiGetCurrency from '../../services/api/apiGetCurrency';
import LoadingUi from '../../components/spinner/LoadingUi';
import { Form, P } from './ProfileTab';
import Input from '../../components/input/Input';
import ErrorLabel from '../../components/error/ErrorLabel';
import { ISettings, apiUpdateUserSettings } from '../../services/api/apiGetUserSettings';
import { useUser } from '../../utils/hooks/useUser';

type ApplicationTabProps = {
    currencyId: string,
    itemsPerPage: number
};

type InputsSettings = ApplicationTabProps & {
    numberPerPage: number
}

export default function ApplicationTab({ currencyId, itemsPerPage }: ApplicationTabProps) {
    const { user } = useUser();
    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });
    const { register, handleSubmit } = useForm<InputsSettings>({
        defaultValues: {
            currencyId, numberPerPage: itemsPerPage
        }
    });

    const { mutate: changeDefaultCurrency } = useMutation({
        mutationFn: apiUpdateUserSettings,
        onSuccess: () => toast.success("Updated"),
        onError: (err) => {
            if (err instanceof Error) {
                toast.error(err.message);
            }
        }
    })

    const onSubmit: SubmitHandler<InputsSettings> = (data) => {
        const { currencyId: id, numberPerPage } = data;
        console.log(id, currencyId);

        const settings: ISettings = { defaultCurrencyId: id, itemsPerPage: numberPerPage };
        console.log(settings);
        changeDefaultCurrency({ userId: user?.id || "", settings });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <P>Make changes to your application here.<br /> Click save when you're done.</P>
            <FormRow lblFor="numberPerPage" lblText="Show transactions per page">
                <Input register={register} id={"perPage"} name={"numberPerPage"} type={"number"} autoFocus />
                <ErrorLabel />
            </FormRow>

            <FormRow lblFor="currency" lblText="Currency by default">
                {isCurrencyLoading ?
                    <LoadingUi />
                    :
                    <Select options={optionCurrency} selectedDefault={currencyId} register={register} name={"currencyId"} ></Select>
                }
                <ErrorLabel />
            </FormRow>

            <SettingsFooter />
        </Form>
    )
}
