
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
    if(parseInt(arr[i].value) && document.getElementById('xRate-value').id == arr[i].id) {
      valve = Math.ceil((parseInt(arr[i].value) * 1.5625)/5)*5;
      document.getElementById('xValve-value').value = valve;

    } else {
      valve = Math.ceil((parseInt(arr[i].value) * 1.5625)/5)*5;
      document.getElementById('yValve-value').value = valve;
    }
  }
}

function findPipeSize() {
  var pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000];
}
