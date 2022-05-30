var username=document.querySelector('#username')
var email=document.querySelector('#email')
var password=document.querySelector('#password')
var confirmPassword=document.querySelector('#confirm-password')
var form=document.querySelector('form')


function showError(input,message){
    let parent=input.parentElement;
    let small =parent.querySelector('small');

    parent.classList.add('error')
    small.innerText =message;
}

function showSuccess(input){
    let parent=input.parentElement;
    let small =parent.querySelector('small');
    parent.classList.remove('error')
    small.innerText ='';
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input=>{
        input.value=input.value.trim();
        if(!input.value){
            
        isEmptyError=true;
            showError(input, 'Vui lòng không để trống');
        }else{
            showSuccess(input)
        }
    })
    return isEmptyError;
}

function checkEmailError(input){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isEmailError=!regexEmail.test(input.value);
input.value=input.value.trim();
  if(regexEmail.test(input.value)){
      showSuccess(input)
  }else{
      showError(input,'Bạn phải nhập đúng định dạng Email')
  }
  return isEmailError;
}

function checkLengthError(input,min,max){
    input.value=input.value.trim();
    if(input.value.length<min){
        showError(input,`Phải có ít nhất ${min} ký tự`)
        return true
    }else if(input.value.length>max){
        showError(input,`Tối đa là ${max} ký tự`)
        return true
    }else{
        showSuccess(input)
        return false
    }
}

function checkMatchPassword(passwordInput,cfPasswordInput){
    if(passwordInput.value!== cfPasswordInput.value){
        showError(cfPasswordInput,"Mật Khẩu Không Trùng Khớp")
        return true
    }
    return false;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    let isEmptyError=checkEmptyError([username,email,password,confirmPassword])
    let isEmailError=checkEmailError(email);
    let ischeckUserNameLengthError=checkLengthError(username,6,20)
    let ischeckPasswordLengthError=checkLengthError(password,6,20)
    let ischeckMatchPassword=checkMatchPassword(password,confirmPassword)
    if(isEmailError||isEmptyError || ischeckMatchPassword||ischeckUserNameLengthError||ischeckPasswordLengthError){

    }else{
        //call api
        console.log([username,email,password,confirmPassword])
    }
})