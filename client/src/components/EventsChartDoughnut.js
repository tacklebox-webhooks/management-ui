import { Doughnut } from 'react-chartjs-2';

const EventsChartDoughnut = ({ eventsByType }) => {
  const { labels, counts } = calculateChartData(eventsByType);
  const options = calculateDoughnutOptions();
  const data = calculateDoughnutData(labels, counts);
  return <Doughnut data={data} options={options} />;
};

const calculateChartData = (eventsByType) => {
  const labels = Object.keys(eventsByType);
  const counts = Object.values(eventsByType);
  return { labels, counts };
};

const calculateDoughnutOptions = () => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Events By Type',
      },
    },
  };
};

const calculateDoughnutData = (labels, counts) => {
  return {
    labels,
    datasets: [
      {
        label: 'Events By Type',
        data: counts,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(0, 102, 0)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
};

export default EventsChartDoughnut;
