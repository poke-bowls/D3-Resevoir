
InitChart();

function InitChart() {

  var lineData = [{
    x: 1,
    y: 8
  }, {
    x: 20,
    y: 10
  }, {
    x: 40,
    y: 12
  }, {
    x: 60,
    y: 16
  }, {
    x: 80,
    y: 20
  }, {
    x: 100,
    y: 25
  }, {
    x: 100,
    y: 25
  }, {
    x: 100,
    y: 25
  }, {
    x: 100,
    y: 25
  }, {
    x: 100,
    y: 25
  }, {
    x: 100,
    y: 25
  },
  ];

  var viz = d3.select("#line-graph"),
    WIDTH = 450,
    HEIGHT = 450,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    xRange = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d) {
      return d.x;
    }), d3.max(lineData, function(d) {
      return d.x;
    })]),
    yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,d3.max(lineData, function(d) {
      return d.y;
    })]),
    xAxis = d3.axisBottom()
      .scale(xRange)
      .tickSize(5),
    yAxis = d3.axisLeft()
      .scale(yRange)
      .tickSize(5);

  viz.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);

  viz.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis);

}
