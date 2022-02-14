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
  
//   console.log(pin);
}
document.getElementById('key-pad').addEventListener('click', function(event){
  const number =(event.target.innerText);
  const clacInput = document.getElementById('typed-numbers');
  if(isNaN(number)) {
    //   console.log('hhhhhhh')
      if(number == 'c'){
          clacInput.value = '';
      }
  }

  else{ 
    const previousNumber = clacInput.value;
    const newNumber = previousNumber + number ;
    clacInput.value = newNumber;
  }
});
function verifyPin(){
    const pin =document.getElementById('display-pin').value;
    const typeNumber =document.getElementById('typed-numbers').value;
    const successMassege =document.getElementById('notify-success');
    const failError =document.getElementById('notify-fail');

    if( pin == typeNumber){
        successMassege.style.display ='block';
        failError.style.display ='none';
    }
    else{
        successMassege.style.display ='none';
       failError.style.display ='block';
    }
}