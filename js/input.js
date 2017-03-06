
function findRate() {
  var rate = 0;
  var arr = document.getElementsByName('rate');

  for(var i = 0; i < arr.length; i++) {
    if(parseInt(arr[i].value))
      rate += parseInt(arr[i].value);
  }
  document.getElementById('total').value = rate;
}

function findValve() {
  var valve = 0;
  var arr = document.getElementsByName('rate');

  for(var i = 0; i < arr.length; i++) {
    if(parseInt(arr[i].value) && document.getElementById('xRateInput').id == arr[i].id) {
      valve = Math.ceil((parseInt(arr[i].value) * 1.5625)/5)*5;
      document.getElementById('xValveValue').value = valve;
    } else if(parseInt(arr[i].value) && document.getElementById('yRateInput').id == arr[i].id) {
      valve = Math.ceil((parseInt(arr[i].value) * 1.5625)/5)*5;
      document.getElementById('yValveValue').value = valve;
    } else {
      document.getElementById('xValveValue').value = 0;
      document.getElementById('yValveValue').value = 0;
    }
  }
}

function findPipeSize() {
  var pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000];
  var size = 0;
  var zSize = 0;
  var arr = document.getElementsByName('rate');
  var z = document.getElementById('total').value;

  for(var i = 0; i < arr.length; i++) {
    if(parseInt(arr[i].value) && document.getElementById('xRateInput').id == arr[i].id) {
      size = Math.ceil((parseInt(arr[i].value) * 4468.56)/4.16);
      for(var j = 0; j < pipeSizes.length; j++) {
        if(size <= pipeSizes[j]) {
          document.getElementById('xPipeValue').value = pipeSizes[j];
          break;
        }
      }
    } else if(parseInt(arr[i].value) && document.getElementById('yRateInput').id == arr[i].id) {
      size = Math.ceil((parseInt(arr[i].value) * 4468.56)/4.16);
      for(var k = 0; k < pipeSizes.length; k++) {
        if(size <= pipeSizes[k]) {
          document.getElementById('yPipeValue').value = pipeSizes[k];
          break;
        }
      }
    }
  }
  zSize = Math.ceil((parseInt(z) * 4468.56)/4.16);
  for(var l = 0; l < pipeSizes.length; l++) {
    if(zSize <= pipeSizes[l]) {
      document.getElementById('zPipeValue').value = pipeSizes[l];
      break;
    }
  }
}

var rateArr = [];
var pipeArr = [];
var plotData = [];
var rateXY,
    rateZ,
    pipes;

function findBarData() {
  var rateXY = document.getElementsByName('rate');
  var rateZ = document.getElementById('total').value;
  var pipes = document.getElementsByName('pipe');

  for(var i = 0; i < rateXY.length; i++) {
    rateArr.push(rateXY[i].value);
  }
  rateArr.push(rateZ);
  for(var j = 0; j < pipes.length; j++) {
    pipeArr.push(pipes[j].value);
  }

  for(var k = 0; k < rateArr.length; k++) {
    plotData.push({x: parseInt(rateArr[k]), y: parseInt(pipeArr[k])});
  }
  plotData = plotData;

}
