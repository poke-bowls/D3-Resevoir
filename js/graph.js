
InitChart();

function InitChart() {
  var reset = d3.select('#bar-graph');
  reset.selectAll('*').remove();

  var viz = d3.select("#bar-graph"),
    WIDTH = 450,
    HEIGHT = 450,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    xRange = d3.scaleBand().rangeRound([MARGINS.left, WIDTH - MARGINS.right]).padding(0.1).domain(plotData.map(function(d) {
      return d.x;
    })),
    yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,d3.max(plotData, function(d) {
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

  viz.selectAll('rect')
    .data(plotData)
    .enter()
    .append('rect')
    .attr('x', function(d) {
      return xRange(d.x);
    })
    .attr('y', function(d) {
      return yRange(d.y);
    })
    .attr('width', xRange.bandwidth())
    .attr('height', function(d) {
      return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
    })
    .attr('fill', 'aqua')
    .on('mouseover', function(d) {
      d3.select(this)
        .attr('fill', 'magenta');
    })
    .on('mouseout', function(d) {
      d3.select(this)
        .attr('fill', 'aqua');
    });

}
