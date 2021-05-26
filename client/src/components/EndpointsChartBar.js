import { Bar } from "react-chartjs-2";

const EndpointsChartBar = ({ eventsByUser }) => {
  const labels = calculateLabels(eventsByUser);
  const eventData = calculateData(eventsByUser);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Events By User",
        data: eventData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

const calculateLabels = (events) => {
  return events.map((event) => event.user);
};

const calculateData = (events) => {
  return events.map((event) => parseInt(event.count, 10));
};

export default EndpointsChartBar;
