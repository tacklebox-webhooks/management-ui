import { Line } from "react-chartjs-2";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MessagesChart = ({ messages }) => {
  const currentlyShowing = calculateScale(messages);
  const labels = calculateLabels(messages);
  const counts = calculateData(messages, labels);

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
        text: currentlyShowing,
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
        data: counts,
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

const labelsForMonth = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let finalDay = new Date(year, month, 0).getDate();

  return [...Array(finalDay + 1).keys()].slice(1);
};

const calculateLabels = (messages) => {
  if (messages.byMonth.length === 1) {
    return labelsForMonth();
  }

  return MONTHS;
};

const calculateData = (messages, labels) => {
  if (messages.byMonth.length === 1) {
    const dailyValues = labels.map((label) => 0);
    messages.byDay.forEach((message) => {
      const messageDate = new Date(message.day).getDate();
      dailyValues[messageDate] = parseInt(message.count, 10);
    });

    return dailyValues;
  }

  return messages.byMonth.map((count) => new Date(count.month).getMonth() + 1);
};

const calculateScale = (messages) => {
  if (messages.byMonth.filter((total) => total > 0).length === 1) {
    return MONTHS[new Date().getMonth()];
  }

  return "All Time";
};

export default MessagesChart;
