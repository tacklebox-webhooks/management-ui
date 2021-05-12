import { Doughnut } from "react-chartjs-2";
// import { messages } from "../lib/db";

// const countStatuses = () => {
//   let statusCounts = {};

//   messages.forEach((message) => {
//     let statusCode = Math.floor(message.status_code / 100) * 100;
//     if (statusCounts[statusCode]) {
//       statusCounts[statusCode] += 1;
//     } else {
//       statusCounts[statusCode] = 1;
//     }
//   });

//   let statuses = Object.keys(statusCounts);

//   statuses.sort((a, b) => {
//     return statusCounts[b] - statusCounts[a];
//   });

//   let counts = statuses.map((code) => statusCounts[code]);

//   const restCount = statuses
//     .slice(3)
//     .reduce((acc, currentValue) => acc + statusCounts[currentValue], 0);
//   counts["Other"] = restCount;

//   return { statuses, counts };
// };

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

const ResponseStatusChart = () => {
  // const { statuses, counts } = countStatuses();
  const { statuses, counts } = {
    statuses: [200, 400, 500],
    counts: [230651, 1446, 2686],
  };
  const statusColors = statuses.map((status) => getStatusColor(status));

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
    labels: [...statuses],
    datasets: [
      {
        label: "Events By Type",
        data: counts,
        backgroundColor: statusColors,
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default ResponseStatusChart;
