import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../utils/hooks/useUser.tsx";
import { SortBy } from "../../types/sortBy.type.ts";
import { QUERY_KEY } from "../../config/queryClientKeys.ts";
import { loaderTransactions } from "../transactions/loader.ts";
import { useBoundStore } from "../../store/store.tsx";
import Diagram from "./diagram/Diagram.tsx";
import DateFilter from "../../components/filterDate/FilterDate.tsx";
import PieView from "./PieView.tsx";
import { devices } from "../../config/breakPoints.ts";
import { useUserSettings } from "../../utils/hooks/useUserSettings.tsx";
import StatList from "./statsBadge/StatList.tsx";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1{
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.text}
  }
`

const Container = styled.div`
  background: ${props => props.theme.background};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 0;
  padding: 1rem 0;
`

const DateFilterContainer = styled.div`
  margin: 0;
  @media only screen and (min-width: ${devices.md}px){
    margin: 0 2rem 0 auto;
  }
`

const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 93vh;
  overflow: scroll;
  max-width: 1200px;
  width: 100%;

  @media only screen and (min-width: ${devices.md}px){
    width: 95%;
  }
`

const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

export default function Dashboard() {
  const { user } = useUser();
  if (!user) {
    return null;
  }
  const { id: userId } = user;

  const [from, to] = useBoundStore(state => state.range);

  const { data: transactions, isLoading } = useQuery(
    {
      queryKey: [userId, QUERY_KEY.TRANSACTIONS, from, to, sortBy],
      queryFn: () => {
        return loaderTransactions(userId, null, sortBy, from, to);
      }
    });

  const { userSettings } = useUserSettings(userId);

  return (
    <Main>
      <StatList transactions={transactions} user={user} currency={userSettings?.defaultCurrency} />

      <Container>
        <Div>
          <h1>Diagram</h1>
          <DateFilterContainer>
            <DateFilter />
          </DateFilterContainer>
        </Div>

        {!transactions ? "" : <Diagram transactions={transactions} userId={userId} isLoading={isLoading} />}
      </Container>

      {/* @ts-ignore */}
      {!userSettings ? "" : <PieView user={user} currency={userSettings.defaultCurrency} />}

    </Main >
  )
}
