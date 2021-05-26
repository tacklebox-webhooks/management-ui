import { Doughnut } from "react-chartjs-2";

const EventsChartDoughnut = ({ eventsByType }) => {
  const labels = calculateLabels(eventsByType);
  const eventData = calculateData(eventsByType);

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
    labels,
    datasets: [
      {
        label: "Events By Type",
        data: eventData,
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

const calculateLabels = (events) => {
  return events.map((event) => event.type);
};

const calculateData = (events) => {
  return events.map((event) => parseInt(event.count, 10));
};

export default EventsChartDoughnut;
