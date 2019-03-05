function Change() {
    var fahrenheit=document.getElementById('input');
    var celcius=(parseFloat(fahrenheit.value)-32)/1.8;
    document.getElementById('result').innerHTML=celcius;
}
