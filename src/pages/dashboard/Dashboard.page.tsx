import { lazy } from "react";
import { DashboardSection } from "./Dashboard.page.style.ts";
import StatsList from "./statCard/StatsList.tsx";
// import DateFilter from "../../components/dateRangePicker/DateFilter.tsx";
const DateFilter = lazy(() => import("../../components/dateRangePicker/DateFilter.tsx"));

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
