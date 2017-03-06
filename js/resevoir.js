
InitResevoir();

function InitResevoir() {
  d3.select('#rateX').style('color', 'yellow');
  d3.select('#pipeX').style('color', 'yellow');
  d3.select('#rateY').style('color', 'blue');
  d3.select('#pipeY').style('color', 'blue');
  d3.select('#rateZ').style('color', 'green');
  d3.select('#pipeZ').style('color', 'green');

  var w = $('#resevoir').width();
  var drawContainer = d3.select("#resevoir"),
    WIDTH = w,
    HEIGHT = 450;

  var resevoirWalls = drawContainer.append('rect')
    .attr('x', 90)
    .attr('y', 40)
    .attr('width', w*3/4)
    .attr('height', 350)
    .style('fill', 'none')
    .attr('stroke', 'red');

  // Draw lines for rates X and Y - input
  var yCoor = [200,250];
  var inRes = drawContainer.selectAll('line')
    .data(yCoor)
    .enter()
    .append('line');
  var rateLineAttr = inRes
    .attr('x1', 0)
    .attr('y1', function(d){ return d; })
    .attr('x2', w/2)
    .attr('y2', function(d){ return d; })
    .attr('stroke-width', 2)
    .attr('stroke', function(d){
      var lineColor;
      if( d === 200 ) { lineColor = 'yellow';
      } else { lineColor = 'blue'; }
      return lineColor;
    });

  // Draw valves
  var valveSizes = [20,19];
  var valves = drawContainer.selectAll('circle')
    .data(valveSizes)
    .enter()
    .append('circle');
  var valveAttr = valves
    .attr('cx', w*2/3)
    .attr('cy', function(d) {
      var yPos;
      if( d === 19 ) { yPos = 200;
      } else { yPos = 250; }
      return yPos;
    })
    .attr('r', function(d) { return d; })
    .style('fill', 'white');

  var valveRate = drawContainer.append('line')
    .attr('x1', w*2/3)
    .attr('y1', 270)
    .attr('x2', w*2/3)
    .attr('y2', 100)
    .attr('stroke-width', 2)
    .attr('stroke', 'white');

  // Draw arcs for input - valve
  drawContainer.append('path')
    .attr('id', 'inputY')
    .attr('d', 'M 302,200 A 50,50 0 0,1 402,200')
    .attr('transform', 'translate(50,50)')
    .style('fill', 'none')
    .style('stroke', 'white');
  drawContainer.append('path')
    .attr('id', 'inputX')
    .attr('d', 'M 302,150 A 50,50 0 0,1 402,150')
    .attr('transform', 'translate(50,50)')
    .style('fill', 'none')
    .style('stroke', 'white');

  // Create text on arc path
  drawContainer.append('text')
    .append('textPath')
      .attr('xlink:href', '#inputX')
      .style('text-anchor', 'middle')
      .attr('startOffset', '50%')
      .style('fill', 'red')
      .text('Rate X');
  drawContainer.append('text')
    .append('textPath')
      .attr('xlink:href', '#inputY')
      .style('text-anchor', 'middle')
      .attr('startOffset', '50%')
      .style('fill', 'red')
      .text('Rate Y');

  // Draw line for rate Z - output
  var zRate = drawContainer.append('line')
    .attr('x1', w*2/3)
    .attr('y1', 100)
    .attr('x2', w)
    .attr('y2', 100)
    .attr('stroke-width', 2)
    .attr('stroke', 'green');
}
