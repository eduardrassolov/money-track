import dayjs from "dayjs";
import { useState } from "react";
import { StyledInput } from "../input/Input";
import { StyledDescriptions, TitleText } from "./NameTransaction";

export default function TimeCreatedTransaction({ register }) {
    const now = dayjs(new Date()).format("YYYY-MM-DD HH:mm");

    return (
        <StyledDescriptions>
            <TitleText>Transaction completed at: </TitleText>
            <StyledInput type="datetime-local" defaultValue={now} {...register("completedAt")} />
        </StyledDescriptions >
    )
}
