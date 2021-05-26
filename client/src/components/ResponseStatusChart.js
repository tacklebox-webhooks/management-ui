import { Doughnut } from "react-chartjs-2";

const getStatusColor = (code) => {
  if (code === "Other") {
    return "rgb(255, 255, 0)";
  }
  const category = Number(code) / 100;

  switch (category) {
    case 1:
      return "rgb(102, 178, 255)";
    case 2:
      return "rgb(54, 162, 235)";
    case 3:
      return "rgb(255, 51, 255)";
    case 4:
      return "rgb(128, 128, 128)";
    case 5:
      return "rgb(255, 99, 132)";
    default:
      return "rgb(255, 205, 86)";
  }
};

const calculateLabels = (messages) => {
  return Object.keys(messages);
};

const calculateData = (messages) => {
  return Object.keys(messages).map((endpoint) => messages[endpoint]);
};

const ResponseStatusChart = ({ messagesByStatus }) => {
  const labels = calculateLabels(messagesByStatus);
  const messageData = calculateData(messagesByStatus);

  const statusColors = labels.map((status) => getStatusColor(status));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Status Codes",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Events By Type",
        data: messageData,
        backgroundColor: statusColors,
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default ResponseStatusChart;
