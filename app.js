function getPin(){
    const pin =Math.round(Math.random()* 10000);
    const pinString = pin +'';
    if(pinString.length ==4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

function genaretePin(){
    const pin = getPin();
    document.getElementById('display-pin').value =pin;
  
  console.log(pin);
}
document.getElementById('key-pad').addEventListener('click', function(event){
  console.log(event.target.innerText);
})