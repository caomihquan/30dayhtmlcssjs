var eKey=document.querySelector('.key p:last-child');
var eLocation=document.querySelector('.location p:last-child');
var eWhich=document.querySelector('.which p:last-child');
var eCode=document.querySelector('.code p:last-child');
var alert=document.querySelector('.alert');

document.addEventListener('keydown',e=>{

    eKey.innerText=e.key;
    eLocation.innerText=e.location;
    eWhich.innerText=e.which;
    eCode.innerText=e.code;
document.querySelector('.result').innerHTML=e.which;

    document.querySelector('.box').classList.remove('hide');
    alert.classList.add('hide')
})