const form = document.querySelector('.formCreate');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.password-input');
const confirmPass = document.querySelector('.rep-password');

form.addEventListener( 'submit' ,(event)=>{
 
  validateForm();
  if(isFormValid()== true){
    form.submit();
  }else{

    event.preventDefault();
  }

})

function isFormValid(){
const inputContainers= document.querySelectorAll('.input-group');
let result = true;
inputContainers.forEach((container)=>{

  if(container.classList.contains('error')){

    result =false;
  }
})


  return result;

}

function validateForm(){

if(nameInput.value.trim()== ''){

setError(nameInput, 'Name can not be empty');
}else if(nameInput.value.trim().length <5 ||nameInput.value.trim().length>15){

  setError(nameInput,'Name must be min 5 and max of 15 characters');
}else{

  setSuccess(nameInput);
}

if(emailInput.value.trim()==''){

  setError(emailInput, 'Provide email address');
}else if(isEmailValid(emailInput.value)){

  setSuccess(emailInput);
}else{

  setError(emailInput, 'Provide valid email address');
}

if(passInput.value.trim()==''){
  setError(passInput, 'Password can not be empty');
}else if(passInput.value.trim().length<6 ||passInput.value.trim().length>20){

  setError(passInput, 'Password has to be min 6 and max of 20 characters');
}else{

  setSuccess(passInput);
}

if(confirmPass.value.trim()== ''){

  setError(confirmPass,'Password can not be empty');
}else if(confirmPass.value !==  passInput.value){

  setError(confirmPass, 'Password does not match');
}else if(confirmPass.value.trim().length<6 ||confirmPass.value.trim().length>20){

  setError(confirmPass,'Password has to be min 6 and max of 20 characters');
}else if(confirmPass.value.trim() === passInput.value.trim()){

  setSuccess(confirmPass);
}


function setError(element, errorMessage){
const parent = element.parentElement;
if(parent.classList.contains('success')){
  parent.classList.remove('success');
}
parent.classList.add('error');
const paragraph = parent.querySelector('p');
paragraph.textContent = errorMessage;

}

}

function setSuccess(element){
const parent = element.parentElement;
if(parent.classList.contains('error')){
  parent.classList.remove('error');
}
parent.classList.add('success');



}
function isEmailValid(email){

  const regularFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return  regularFormat.test(email);

}