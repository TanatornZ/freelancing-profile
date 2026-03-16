import ActivityFeed from "../components/dashboard/ActivityFeed";
import EarningsByCategory from "../components/dashboard/EarningsByCategory";
import InvoiceList from "../components/dashboard/InvoiceList";
import ProjectsTable from "../components/dashboard/ProjectsTable";
import ProjectStatusDonut from "../components/dashboard/ProjectStatusDonut";
import RevenueChart from "../components/dashboard/RevenueChart";
import StatsCard from "../components/dashboard/StatsCard";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { stats } from "../data/mockData";

const statCards = [
  {
    title: "Total Revenue",
    value: `$${stats.totalRevenue.toLocaleString()}`,
    change: stats.revenueChange,
    iconBg: "bg-green-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-green-600"
      >
        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        <path
          fillRule="evenodd"
          d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
          clipRule="evenodd"
        />
        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
      </svg>
    ),
  },
  {
    title: "Active Projects",
    value: String(stats.activeProjects),
    change: stats.projectsChange,
    iconBg: "bg-indigo-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-indigo-600"
      >
        <path
          fillRule="evenodd"
          d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Total Clients",
    value: String(stats.totalClients),
    change: stats.clientsChange,
    iconBg: "bg-purple-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-purple-600"
      >
        <path
          fillRule="evenodd"
          d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
          clipRule="evenodd"
        />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>
    ),
  },
  {
    title: "Pending Invoices",
    value: `$${stats.pendingAmount.toLocaleString()}`,
    change: stats.pendingChange,
    iconBg: "bg-orange-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-orange-500"
      >
        <path
          fillRule="evenodd"
          d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z"
          clipRule="evenodd"
        />
        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
      </svg>
    ),
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Sidebar />

      <div className="ml-60 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-6 space-y-6">
          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {statCards.map((card) => (
              <StatsCard key={card.title} {...card} />
            ))}
          </div>

          {/* D3 Charts row: Area chart + Donut */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <ProjectStatusDonut />
          </div>

          {/* D3 Earnings + Invoice list */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <EarningsByCategory />
            </div>
            <InvoiceList />
          </div>
          {/* Projects table */}
          <ProjectsTable />

          {/* Activity + Deadlines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UpcomingDeadlines />
            <ActivityFeed />
          </div>
        </main>
      </div>
    </div>
  );
}
