import { useQuery } from "@tanstack/react-query";
import Select, { StyledSelect } from "../dropDown/Select";
import apiGetCurrency from "../../services/api/apiGetCurrency";
import LoadingUi from "../spinner/LoadingUi";
import { StyledDescriptions, TitleText } from "./NameTransaction";

export default function CurrenctyTransaction({ currencyId, onChange }) {

    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });
    const handleChange = (e) => {
        console.log(e.target.value);
        onChange("currencyId", e.target.value);
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
