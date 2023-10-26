import { useQuery } from "@tanstack/react-query";
import Select from "../dropDown/Select";
import apiGetCurrency from "../../services/api/apiGetCurrency";
import LoadingUi from "../spinner/LoadingUi";
import { StyledDescriptions, TitleText } from "./NameTransaction";

export default function CurrenctyTransaction({ register }: any) {

    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });

    return (
        <StyledDescriptions>
            <TitleText>Select currency: </TitleText>
            {isCurrencyLoading ?
                <LoadingUi />
                :
                <Select options={optionCurrency} register={register} name={"currency"}></Select>
            }
        </StyledDescriptions>

    )
}
