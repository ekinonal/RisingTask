"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph: React.FC = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Data usage per network",
        data: [1, 2, 3, 2, 3.1, 4, 6],
        borderColor: "black",
        backgroundColor: "rgba(0,0,0,0.1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return ` ${context.raw} GB`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number | string) {
            return `${value}GB`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white py-6 px-4 lg:px-6 rounded-lg shadow-md w-10/12 lg:w-4/5 mx-auto">
      <h2 className="text-2xl font-bold pt-2 pb-4">Data usage per network</h2>
      <div className="relative h-96">
        <Line data={data} options={options as any} />
      </div>
    </div>
  );
};

export default Graph;
