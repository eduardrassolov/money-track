import { useQuery } from "@tanstack/react-query"
import { QUERY_KEY } from "../../config/queryClientKeys"
import { apiGetCategories, apiGetUserCategory } from "../../services/api/apiGetCategory";
import Badge from "./Badge";
import styled from "styled-components";
import { ITransactionCategory } from "../../interface/ITransactionCategory";
import { useCurrStore } from "../../store/store";
import { useUser } from "../../utils/hooks/useUser";
import { useEffect } from "react";

const BadgeContainer = styled.div`
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;

    p{
        font-size: 0.8rem;
        margin: 0;
    }
`

const BadgeSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
function setDefaultActive(category: ITransactionCategory[]): string[] {
    return category.map(category => category.id)
}

export default function CategoryBadgesList({ transactionType }: { transactionType: Number }) {
    const { user } = useUser();

    const { data: defaultCategories } = useQuery({
        queryKey: [QUERY_KEY.CATEGORIES, transactionType],
        queryFn: () => apiGetCategories(transactionType)
    });
    const { data: userCategories } = useQuery({
        queryKey: [QUERY_KEY.USER_CATEGORIES, user?.id],
        queryFn: () => apiGetUserCategory(transactionType, user?.id)
    })

    const { setCategoryFilter, categoryFilter, clearCategoryFilter } = useCurrStore((state) => ({
        setCategoryFilter: state.setCategoryFilter,
        categoryFilter: state.categoryFilter,
        clearCategoryFilter: state.clearCategoryFilter
    }));


    function toggleBadge(id: string) {
        setCategoryFilter(id);
    }

    function handleSelectAll() {
        if (!defaultCategories)
            return;

        const categoriesId = [...setDefaultActive(defaultCategories), ...setDefaultActive(userCategories)];
        categoriesId.forEach(id => categoryFilter.includes(id) ? "" : setCategoryFilter(id));
    }

    function handleClearAll() {
        clearCategoryFilter();
    }

    return (
        <BadgeSection>
            <div>
                <button onClick={handleSelectAll}>Select All</button>
                <button onClick={handleClearAll}>Clear All</button>
            </div>

            <BadgeContainer>
                {defaultCategories?.map((category) => {
                    return <Badge key={category.id} id={category.id} label={category.name} onClick={toggleBadge} isSelected={categoryFilter.includes(category.id)} />
                })}

            </BadgeContainer>

            <BadgeContainer>
                {userCategories?.map((category) => {
                    return <Badge key={category.id} id={category.id} label={category.name} onClick={toggleBadge} isSelected={categoryFilter.includes(category.id)} />
                })}

            </BadgeContainer>
        </BadgeSection>
    )
}
