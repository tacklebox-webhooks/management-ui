import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const EventsChartDoughnut = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Events By Type",
      },
    },
  };

  const data = {
    labels: ["todo_created", "todo_deleted", "todo_updated", "Other"],
    datasets: [
      {
        label: "Events By Type",
        data: [300, 100, 60, 25],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(0, 102, 0)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default EventsChartDoughnut;
