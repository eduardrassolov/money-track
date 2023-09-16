import { StyledContainer } from "./Dashboard.page.style.ts";
import Filter from "../../components/operations/filter/Filter.js";
import { FILTER_DASHBOARD, FILTER_KEYS } from "../../components/operations/filter/filterParameters.js";
import Statictisc from "./Statictisc.tsx";

// TODO - refactor component Dashboard. Remove caclulation from component
export default function Dashboard() {

  return (
    <>
      <StyledContainer>
        {/* <Filter options={FILTER_DASHBOARD} filterKey={FILTER_KEYS.DATE} /> */}

        <Statictisc />
      </StyledContainer >
    </>
  )
}
