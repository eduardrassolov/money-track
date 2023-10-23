import { DashboardSection } from "./Dashboard.page.style.ts";
import Filter from "../../components/operations/filter/Filter.js";
import { FILTER_DASHBOARD, FILTER_KEYS } from "../../components/operations/filter/filterParameters.js";
import StatsList from "./statCard/StatsList.tsx";
import DateFilter from "../../components/dateRangePicker/DateFilter.tsx";

export default function Dashboard() {
  return (
    <>
      <DashboardSection>
        {/* <Filter options={FILTER_DASHBOARD} filterKey={FILTER_KEYS.DATE} /> */}

        <DateFilter />

        <StatsList />
      </DashboardSection>
    </>
  )
}
