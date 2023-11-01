import { SubmitHandler, useForm } from 'react-hook-form';
import FormRow from '../../components/newTransaction/FormRow';
import SettingsFooter from './SettingsFooter';
import Select from '../../components/dropDown/Select';
import { useQuery } from '@tanstack/react-query';
import apiGetCurrency from '../../services/api/apiGetCurrency';
import LoadingUi from '../../components/spinner/LoadingUi';

type InputsSettings = {
    currencyId: string
};

export default function ApplicationTab({ currencyId }: InputsSettings) {
    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });
    const { register, handleSubmit } = useForm<InputsSettings>();

    const onSubmit: SubmitHandler<InputsSettings> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormRow lblFor="currency" lblText="Currency">
                {isCurrencyLoading ?
                    <LoadingUi />
                    :
                    <Select options={optionCurrency} selectedDefault={currencyId} register={register} name={"currency"} ></Select>
                }
            </FormRow>

            <SettingsFooter />
        </form>
    )
}
