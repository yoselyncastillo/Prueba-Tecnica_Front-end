import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { User } from "../../interfaces/user";

import "./BarChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface BarChartProps {
  users: User[];
}
export const BarChart = ({ users }: BarChartProps) => {
  const chartData = {
    labels: users.map((user) => user.login),
    datasets: [
      {
        label: "Seguidores",
        data: users.map((user) => user.followers || 0),
        backgroundColor: "#6941c6",
      },
    ],
  };

  return (
    <div className="BarChart">
      {users.length > 0 && <Bar data={chartData} />}
    </div>
  );
};
