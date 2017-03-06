
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
    .attr('x1',0)
    .attr('y1', function(d){ return d; })
    .attr('x2',0)
    .attr('y2', function(d){ return d; })
    .transition()
    .duration(1500)
    .attr('x2',w/2)
    .attr('y2', function(d){ return d; })
    .attr('stroke-width', 2)
    .attr('stroke', function(d){
      var lineColor;
      if( d === 200 ) { lineColor = 'yellow';
      } else { lineColor = 'blue'; }
      return lineColor;
    });

  // Draw valves

  var valve1 = drawContainer.append('circle')
    .attr('cx', w*2/3)
    .attr('cy', 200)
    .attr('r', 20)
    .style('fill', 'none')
    .transition()
    .delay(3000)
      .duration(1000)
    .style('fill', 'white');

  var valve2 = drawContainer.append('circle')
    .attr('cx', w*2/3)
    .attr('cy', 250)
    .attr('r', 20)
    .style('fill', 'none')
    .transition()
    .delay(3000)
      .duration(1000)
    .style('fill', 'white');

  var dynamo1 = drawContainer.append('path')
    .attr('d', 'M 0,250 A 50,50 0 0,1 0,250')
    .transition()
      .delay(2000)
      .duration(1000)
      .attrTween('d', function() {
        return interpolateSVGSegment(w*2/3, 250, 20, 0, 360);
      })
    .style('fill', 'white');

  var dynamo2 = drawContainer.append('path')
    .attr('d', 'M 0,200 A 50,50 0 0,1 0,200')
    .transition()
      .delay(2000)
      .duration(1000)
      .attrTween('d', function() {
        return interpolateSVGSegment(w*2/3, 200, 20, 0, 360);
      })
    .style('fill', 'white');

  var valveRate = drawContainer.append('line')
    .attr('x1', w*2/3)
    .attr('y1', 100)
    .attr('x2', w*2/3)
    .attr('y2', 100)
    .attr('stroke-width', 2)
    .attr('stroke', 'white')
    .transition()
      .delay(2500)
      .duration(1000)
    .attr('x2', w*2/3)
    .attr('y2', 270);

  // Draw arcs for input - valve
  function generateSVGSegment(x, y, r, startAngle, endAngle) {

   // convert angles to Radians
   startAngle *= (Math.PI / 180);
   endAngle *= (Math.PI / 180);

   var largeArc = endAngle - startAngle <= Math.PI ? 0 : 1; // 1 if angle > 180 degrees
   var sweepFlag = 1; // is arc to be drawn in +ve direction?

   return ['M', x, y, 'L', x + Math.sin(startAngle) * r, y - (Math.cos(startAngle) * r),
           'A', r, r, 0, largeArc, sweepFlag, x + Math.sin(endAngle) * r, y - (Math.cos(endAngle) * r), 'Z'
          ].join(' ');
  }

  function interpolateSVGSegment(x, y, r, startAngle, endAngle) {
   return function(t) {
     return generateSVGSegment(x, y, r, startAngle, startAngle + ((endAngle - startAngle) * t));
   };
  }

  var lineY = drawContainer.append('path')
    .attr('d', 'M 0,200 A 50,50 0 0,1 0,200')
    .transition()
      .delay(1000)
      .duration(1000)
    .attr('id', 'inputY')
    .style('fill', 'none')
    .style('stroke', 'white')
    .attr('transform', 'translate(50,50)')
    .attr('d', 'M 300,200 A 50,50 0 0,1 402,200');

  var lineX = drawContainer.append('path')
    .attr('d', 'M 0,150 A 50,50 0 0,1 0,150')
    .transition()
      .delay(1000)
      .duration(1000)
    .attr('id', 'inputX')
    .attr('d', 'M 300,150 A 50,50 0 0,1 402,150')
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
    .attr('x2', w*2/3)
    .attr('y2', 100)
    .attr('stroke-width', 2)
    .attr('stroke', 'green')
    .transition()
      .delay(2500)
      .duration(1000)
    .attr('x2', w)
    .attr('y2', 100);
}
