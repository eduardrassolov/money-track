import { useQuery } from "@tanstack/react-query";
import { StyledSelect } from "../../dropDown/Select";
import apiGetCurrency from "../../../services/api/apiGetCurrency";
import LoadingUi from "../../spinner/LoadingUi";
import { TransactionProp } from "../useNewTransaction";
import React from "react";
import { StyledDescriptions, TitleText } from "../nameTransaction/NameTransaction.style";

type CurrencyTransaction = TransactionProp & {
    currencyId: string
}

export default function CurrencyTransaction({ currencyId, onChange }: CurrencyTransaction) {

    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { target: { value } } = e;
        console.log(value);
        onChange("currencyId", value);
    }

    console.log(currencyId);
    return (
        <StyledDescriptions>
            <TitleText>Select currency: </TitleText>
            {isCurrencyLoading ?
                <LoadingUi />
                :
                <StyledSelect name={"currency"} value={currencyId} onChange={handleChange}>
                    {optionCurrency?.map(currency => <option key={currency.id} value={currency.id}>{currency.name}</option>)}
                </StyledSelect>
            }
        </StyledDescriptions >

    )
}
