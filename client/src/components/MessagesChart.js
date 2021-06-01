import { Line } from 'react-chartjs-2';
import { MONTHS } from '../constants/Dates';

const MessagesChart = ({ messages }) => {
  const { xAxis, labels, counts } = calculateChartData(messages);
  const options = calculateLineOptions(xAxis);
  const data = calculateLineData(labels, counts);
  return <Line data={data} options={options} />;
};

const buildDays = (first, current) => {
  const allDays = [...Array(current + 1).keys()];
  return allDays.slice(first);
};

const buildMonths = (first, current) => {
  const months = [];
  for (let month = first; month <= current; month++) {
    months.push(MONTHS[month]);
  }
  return months;
};

const buildYears = (first, current) => {
  const years = [];
  for (let year = first; year <= current; year++) {
    years.push(year);
  }
  return years;
};

const calculateChartData = ({ byDay, byMonth, byYear, first }) => {
  const { currentDay, currentMonth, currentYear } = getCurrentDate();
  let xAxis;
  let labels;
  const counts = [];

  if (first.year !== currentYear) {
    xAxis = 'Years';
    labels = buildYears(first.year, currentYear);
    labels.forEach((year) => counts.push(byYear[`${year}`] || 0));
  } else if (first.month !== currentMonth) {
    xAxis = 'Months';
    labels = buildMonths(first.month, currentMonth);

    labels.forEach((month) => {
      const monthNum = MONTHS.indexOf(month);
      counts.push(byMonth[`${monthNum}`] || 0);
    });
    console.log('Labels: ', labels);
    console.log('Counts: ', counts);
  } else {
    xAxis = 'Days';
    labels = buildDays(first.day, currentDay);
    labels.forEach((day) => counts.push(byDay[`${day}`] || 0));
  }

  return { xAxis, labels, counts };
};

const calculateLineData = (labels, counts) => {
  return {
    labels: labels,
    datasets: [
      {
        label: 'Messages Sent',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: counts,
        tension: 0.3,
      },
    ],
  };
};

const calculateLineOptions = (xAxis) => {
  return {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: xAxis,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMin: 50,
        title: {
          display: true,
          text: 'Messages',
        },
      },
    },
  };
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate() - 1;
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  return { currentDay, currentMonth, currentYear };
};

export default MessagesChart;
