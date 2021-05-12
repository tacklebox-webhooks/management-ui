import { Line } from "react-chartjs-2";

const MessagesChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: false,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Messages",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "All Time",
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Messages Sent",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [28615, 25739, 35651, 29772, 50170, 31829, 33007],
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default MessagesChart;
