
// ##############################
// // // Charts - see Dashboard view
// #############################
const chartData = {
  labels: ['St Cyr', 'La Ville Aux Dames', 'St Avertin', 'Fondettes', 'Tours', 'Montlouis', 'Joué-lès-Tours'],
  datasets: [
    {
      label: 'Population en 2015',
      data: [
        15911,
        5305,
        14954,
        10493,
        136252,
        10609,
        37535,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
    },
  ],
};

const chartData2 = {
  labels: ['Social', 'Wild Code School', 'Organic Search', 'Direct', 'Referral'],
  datasets: [
    {
      label: 'Trafic',
      data: [
        159110,
        50305,
        149504,
        104903,
        106009,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
    },
  ],
};

const chartData3 = {
  labels: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUN', 'JUL', 'AU', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      label: 'users',
      data: [
        159110,
        50305,
        149504,
        1604903,
        106009,
        375305,
        345105,
        255147,
        2547741,
        5411110,
        457224,
        4552144,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)',

      ],
    },
  ],
};

module.exports = {
  // these 3 are used to create the Charts - Dashboard view
  chartData,
  chartData2,
  chartData3,
};
