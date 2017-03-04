
function findRate() {
  var rate = 0;
  var arr = document.getElementsByName('rate');

  for(var i = 0; i < arr.length; i++) {
    if(parseInt(arr[i].value))
      rate += parseInt(arr[i].value);
  }
  document.getElementById('total').value = rate;
}
