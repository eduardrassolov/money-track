import { useState } from "react";
import { toast } from "react-toastify";
import { HiArrowRightCircle, HiMiniCheckCircle, HiOutlineArrowLeftCircle } from "react-icons/hi2";
import { useQueryClient } from "@tanstack/react-query";

import { useUser } from "../../utils/hooks/useUser";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { QUERY_KEY } from "../../config/queryClientKeys";
import useCreateTransaction from "../newTransaction/useCreateTransaction";

import useSort from "../../utils/hooks/useSort";
import { SortBy } from "../../types/sortBy.type";
import { useBoundStore } from "../../store/store";
import StepLine from "./stepLine/StepLineList";
import useNewTransaction from "./useNewTransaction";
import scrollTop from "../../utils/helpers/scrollTop";
import { StyledContainer } from "./CreateTransaction.style";

export default function CreateNewTransaction({ type }: { type: number }) {
    const { user } = useUser();
    const queryClient = useQueryClient();
    const { createTransaction } = useCreateTransaction();
    const sortBy: SortBy = useSort();
    const range = useBoundStore((state) => state.range);

    if (!user) {
        return null;
    }
    const { id: userId } = user;
    const userCurrency = user?.user_metadata.currency as string;

    const key = type === TYPES_TRANSACTION.INCOME ? QUERY_KEY.INCOMES : QUERY_KEY.EXPENSES;

    const { transaction, transactionDataArr, reset } = useNewTransaction(user, type);

    const [currentStep, setStep] = useState(0);

    const nextStep = () => {
        scrollTop();
        setStep((prev) => (prev === transactionDataArr.length ? prev : prev + 1));
    };

    const prevStep = () => setStep((prev) => (!prev ? prev : prev - 1));

    function createNewTransaction() {
        const { description, amount, categoryId, currencyId, timeCompleted } = transaction;
        console.log(transaction);

        if (!description || !amount || !categoryId || !currencyId || !timeCompleted) {
            return null;
        }

        createTransaction(
            {
                description,
                amount,
                completedAt: timeCompleted,
                categoryId,
                profileId: userId,
                currencyId,
            },
            {
                onSuccess: () => {
                    toast.success("New transaction added.");
                    const [from, to] = range;
                    queryClient.invalidateQueries({ queryKey: [userId, key, from, to, sortBy] });
                    setStep(() => 0);
                    reset();
                },
            }
        );
    }

    return (
        <>
            <StepLine maxLength={transactionDataArr.length} currentStep={currentStep} />

            {transactionDataArr[currentStep]}

            <StyledContainer>
                <HiOutlineArrowLeftCircle onClick={prevStep} size={"2.4rem"} cursor={"pointer"} />

                {currentStep === transactionDataArr.length - 1 ? (
                    <HiMiniCheckCircle onClick={createNewTransaction} size={"2.5rem"} color={"#7286D3"} cursor={"pointer"}>
                        Create
                    </HiMiniCheckCircle>
                ) : (
                    <HiArrowRightCircle onClick={nextStep} size={"2.4rem"} cursor={"pointer"} color={"#7286D3"} />
                )}
            </StyledContainer>
        </>
    );
}
