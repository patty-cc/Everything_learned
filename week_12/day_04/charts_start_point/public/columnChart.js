var createColumnChart = function() {

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: document.querySelector('div#column-chart')
    },
      title: {
        text: 'Best Programming Languages'
      },
      series: [
        {
        name: 'Cohort 15',
        color: 'tomato',
        data: [2, 9, 7, 2]
      },
      {
        name: 'Cohort 15',
        color: 'wheat',
        data: [15, 1, 2, 1]
      }
      ],
      xAxis: {
        categories: ['Ruby', 'Java', 'Javascript', 'C']
      }
  })
}
