var request = new XMLHttpRequest();

request.open('GET', 'https://thomasmns.000webhostapp.com/read.php');

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  console.log('THIS HAS HAPPENED');
};

request.send();

console.log('THING');
