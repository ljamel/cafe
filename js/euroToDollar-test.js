var url = "https://free.currconv.com/api/v7/convert?q=EUR_USD&compact=ultra&apiKey=399637b64ad44aa684d6";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "*/*");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      data = JSON.parse(xhr.response);
      console.log(data["EUR_USD"]);
      var convresutl = data["EUR_USD"];
   }};

xhr.send();

function convertEuro(euro, currency){
 switch(currency){
  case 'USD' :
   return euro * 1.3;
  case 'GBP' :
   return euro * 0.87;
  case 'JPY' :
   return euro * 124.77;
  default : {
   throw new Error('Currency not handled');
  }
 }
}



function assert(message, expr){
 if(!expr){
  output(false, message);
  throw new Error(message);
 }
 output(true, message);
}

function output(result, message){
 var p = document.createElement('p');
 message += result ? ' : SUCCESS' : ' : FAILURE';
 p.style.color = result ? '#0c0' : '#c00';
 p.innerHTML = message;
 document.body.appendChild(p);
}



assert('1€ should return 1,3$', convertEuro(1, "JPY") === 124.77);
assert('2€ should return 2,6$', convertEuro(2, "USD") === 2.6);
