import { ITransaction } from "../../../interface/ITransactions";
import { Card } from "./TransactionCard.style";
import TYPES_TRANSACTION from "../../../config/typeTransactions";
import { useBoundStore } from "../../../store/store";
import IconCard from "./iconContainer/IconCard";
import Info from "./info/Info";
import CategoryCard from "./category/CategoryCard";
import Price from "./price/Price";
import Operations from "./operations/Operations";
import AnimatedContainer from "../../animation/AnimatedContainer";

interface ITransactionProps {
    item: ITransaction;
    onDelete: () => void;
    onEdit: (id: number) => void;
    index?: number;
}

export function TransactionCard({ item, onDelete, onEdit, index = 1 }: ITransactionProps) {
    const { description, amount, completedAt, category, currency, type, id } = item;

    const theme = useBoundStore((state) => state.theme);

    const formattedPrice = type.id === TYPES_TRANSACTION.EXPENSE ? theme.expensePrice : theme.incomePrice;
    // const typeTransaction = type.id === TYPES_TRANSACTION.EXPENSE ? "-" : "+";
    return (
        <AnimatedContainer duration={0.9} delay={0.1 * index} animateOnStart={true}>
            <Card>
                <IconCard />

                <Info description={description} time={completedAt} />

                <CategoryCard text={category.name} />

                <Price amount={amount} currency={currency} colorTransaction={formattedPrice} />

                <Operations transactionId={id} onDelete={onDelete} onEdit={onEdit} />
            </Card>
        </AnimatedContainer>
    );
}
