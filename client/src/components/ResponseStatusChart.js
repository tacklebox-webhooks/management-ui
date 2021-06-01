import { Doughnut } from 'react-chartjs-2';

const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Status Codes',
    },
  },
};

const ResponseStatusChart = ({ messagesByStatus }) => {
  const { labels, counts } = calculateChartData(messagesByStatus);
  const statusColors = labels.map((status) => getStatusColor(status));
  const data = calculateDoughnutData(labels, counts, statusColors);
  return <Doughnut data={data} options={doughnutOptions} />;
};

const calculateChartData = (messagesByStatus) => {
  const labels = Object.keys(messagesByStatus);
  const counts = Object.values(messagesByStatus);
  return { labels, counts };
};

const calculateDoughnutData = (labels, counts, statusColors) => {
  return {
    labels,
    datasets: [
      {
        label: 'Events By Type',
        data: counts,
        backgroundColor: statusColors,
        hoverOffset: 4,
      },
    ],
  };
};

const getStatusColor = (code) => {
  if (code === 'Other') {
    return 'rgb(255, 255, 0)';
  }

  const category = Math.floor(parseInt(code, 10) / 100);
  switch (category) {
    case 1:
      return 'rgb(102, 178, 255)';
    case 2:
      return 'rgb(54, 162, 235)';
    case 3:
      return 'rgb(255, 51, 255)';
    case 4:
      return 'rgb(128, 128, 128)';
    case 5:
      return 'rgb(255, 99, 132)';
    default:
      return 'rgb(255, 205, 86)';
  }
};

export default ResponseStatusChart;
