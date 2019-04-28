var request = new XMLHttpRequest();

request.open('GET', 'http://thomasmns.000webhostapp.com/read.php');

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
}

request.send();
