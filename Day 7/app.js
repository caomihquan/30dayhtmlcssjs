var content= document.querySelector('.content');
var input=document.querySelector('.content input')

var tags=['NodeJs','ReactJs'];


function render(){
    // content.innerHTML=''
    // for(let i = 0 ; i< tags.length;i++){
    //     const tag = tags[i];
    //     content.innerHTML +=`<li>${tag} <i class="fa-solid fa-xmark" onClick="removeTag(${i})"></i></li>`
    // }
    content.innerHTML=''
    tags.forEach(function(tag,i){
        content.innerHTML +=`<li>${tag} <i class="fa-solid fa-xmark" onClick="removeTag(${i})"></i></li>`
    })
    content.appendChild(input)
    input.focus()
    
}

render();

function addTags(){

}

input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter'){
        let tag=input.value.trim();
        if(tag!=''&&!tags.includes(tag)){
            tags.push(tag)
            
            render();
        }
        input.value=''
        
        
    }
})

var removeTag=function(index){
    tags.splice(index,1)
    render();
}

document.querySelector('.remove-all').addEventListener('click',function(){
    tags=[];
    render();
})

