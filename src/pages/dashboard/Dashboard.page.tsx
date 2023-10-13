import { DashboardSection } from "./Dashboard.page.style.ts";
import Filter from "../../components/operations/filter/Filter.js";
import { FILTER_DASHBOARD, FILTER_KEYS } from "../../components/operations/filter/filterParameters.js";
import StatsList from "./statCard/StatsList.tsx";

// TODO - refactor component Dashboard. Remove caclulation from component
export default function Dashboard() {
  return (
    <>
      <DashboardSection>
        <Filter options={FILTER_DASHBOARD} filterKey={FILTER_KEYS.DATE} />

        <StatsList />
      </DashboardSection>
    </>
  )
}
