import { Bar } from 'react-chartjs-2';

const EndpointsChartBar = ({ eventsByUser }) => {
  const { labels, counts } = calculateChartData(eventsByUser);
  const data = calculateBarData(labels, counts);
  const options = calculateBarOptions();
  return <Bar data={data} options={options} />;
};

const calculateBarOptions = () => {
  return {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Users',
        },
      },
      y: {
        beginAtZero: true,
        suggestedMin: 50,
        title: {
          display: true,
          text: 'Events',
        },
      },
    },
  };
};

const calculateChartData = (eventsByUser) => {
  const labels = Object.keys(eventsByUser);
  const counts = Object.values(eventsByUser);
  return { labels, counts };
};

const calculateBarData = (labels, counts) => {
  return {
    labels: labels,
    datasets: [
      {
        label: 'Events By User',
        data: counts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

export default EndpointsChartBar;
