var tagTel = '<p><img src="svg/telephone-fill.svg"</p>';
var tagFio = '<p><img src="svg/person-fill.svg"</p>';
var tagMail = '<p><img src="svg/envelope-fill.svg"</p>';
var tagAdr = '<p><img src="svg/house-fill.svg"</p>';
//1
var targetMailOne = document.getElementById('one-mail');
var targetFioOne = document.getElementById('one-fio');
var targetTelOne = document.getElementById('one-tel');
var targetAdrOne = document.getElementById('one-adr');
//2
var targetMailTwo = document.getElementById('two-mail');
var targetFioTwo = document.getElementById('two-fio');
var targetTelTwo = document.getElementById('two-tel');
var targetAdrTwo = document.getElementById('two-adr');
//3
var targetMailThree = document.getElementById('three-mail');
var targetFioThree = document.getElementById('three-fio');
var targetTelThree = document.getElementById('three-tel');
var targetAdrThree = document.getElementById('three-adr');
//4
var targetMailFour = document.getElementById('four-mail');
var targetFioFour = document.getElementById('four-fio');
var targetTelFour = document.getElementById('four-tel');
var targetAdrFour = document.getElementById('four-adr');
//5
var targetMailFive = document.getElementById('five-mail');
var targetFioFive = document.getElementById('five-fio');
var targetTelFive = document.getElementById('five-tel');
var targetAdrFive = document.getElementById('five-adr');
//6
var targetMailSix = document.getElementById('six-mail');
var targetFioSix = document.getElementById('six-fio');
var targetTelSix = document.getElementById('six-tel');
var targetAdrSix = document.getElementById('six-adr');
function telephoneFunc() {
  // Выполняем действие, если ширина меньше 1000px
    var w = window.innerWidth;
    if (w <= 768) {
    //1
    targetFioOne.innerHTML = tagFio;
    targetTelOne.innerHTML = tagTel;
    targetMailOne.innerHTML = tagMail;
    targetAdrOne.innerHTML = tagAdr;
    //2
    targetFioTwo.innerHTML = tagFio;
    targetTelTwo.innerHTML = tagTel;
    targetMailTwo.innerHTML = tagMail;
    targetAdrTwo.innerHTML = tagAdr;
    //3
    targetFioThree.innerHTML = tagFio;
    targetTelThree.innerHTML = tagTel;
    targetMailThree.innerHTML = tagMail;
    targetAdrThree.innerHTML = tagAdr;
    //4
    targetFioFour.innerHTML = tagFio;
    targetTelFour.innerHTML = tagTel;
    targetMailFour.innerHTML = tagMail;
    targetAdrFour.innerHTML = tagAdr;
    //5
    targetFioFive.innerHTML = tagFio;
    targetTelFive.innerHTML = tagTel;
    targetMailFive.innerHTML = tagMail;
    targetAdrFive.innerHTML = tagAdr;
    //6
    targetFioSix.innerHTML = tagFio;
    targetTelSix.innerHTML = tagTel;
    targetMailSix.innerHTML = tagMail;
    targetAdrSix.innerHTML = tagAdr;
}
}
telephoneFunc()