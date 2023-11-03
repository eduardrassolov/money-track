import { SubmitHandler, useForm } from 'react-hook-form';
import FormRow from '../../components/newTransaction/FormRow';
import SettingsFooter from './SettingsFooter';
import Select from '../../components/dropDown/Select';
import { useQuery } from '@tanstack/react-query';
import apiGetCurrency from '../../services/api/apiGetCurrency';
import LoadingUi from '../../components/spinner/LoadingUi';
import { Form, P } from './ProfileTab';
import { ErrorP } from '../../components/newTransaction/FormTransaction.style';
import Input from '../../components/input/Input';

type ApplicationTabProps = {
    currencyId: string,
};

type InputsSettings = ApplicationTabProps & {
    numberPerPage: number
}

export default function ApplicationTab({ currencyId }: ApplicationTabProps) {
    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });
    const { register, handleSubmit } = useForm<InputsSettings>({
        defaultValues: {
            currencyId, numberPerPage: Number(localStorage.getItem("transactionPerPage")) || 10
        }
    });

    const onSubmit: SubmitHandler<InputsSettings> = (data) => {
        const { currencyId: id, numberPerPage } = data;
        localStorage.setItem("transactionPerPage", numberPerPage.toString());
        if (id === currencyId) {
            return;
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <P>Make changes to your application here.<br /> Click save when you're done.</P>
            <FormRow lblFor="numberPerPage" lblText="Show transactions per page">
                <Input register={register} id={"perPage"} name={"numberPerPage"} type={"number"} autoFocus />
                <ErrorP></ErrorP>
            </FormRow>

            <FormRow lblFor="currency" lblText="Currency by default">
                {isCurrencyLoading ?
                    <LoadingUi />
                    :
                    <Select options={optionCurrency} selectedDefault={currencyId} register={register} name={"currencyId"} ></Select>
                }
                <ErrorP></ErrorP>
            </FormRow>

            <SettingsFooter />
        </Form>
    )
}
