import { useLoaderData } from "react-router"

export default function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>This is sDashboard</div>
  )
}
