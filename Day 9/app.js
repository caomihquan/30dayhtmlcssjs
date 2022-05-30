var search=document.querySelector('.search');
var city=document.querySelector('.city');
var country=document.querySelector('.country');
var value=document.querySelector('.value');
var time=document.querySelector('.time');
var shortDesc=document.querySelector('.short-desc');
var visibility=document.querySelector('.visibility span');
var wind=document.querySelector('.wind span');
var sun=document.querySelector('.sun span');

async function changeWeatherUI(input){
    search.value.trim()
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data=await fetch(apiURL).then(res=>res.json())
    if(data.cod==200){
    document.querySelector('.content').classList.remove('hide')
    data.main.temp>=18 ? (document.body.className = 'hot'): (document.body.className = 'cold')
    city.innerText=data.name;
    country.innerText=data.sys.country;
    value.innerText=Math.round(data.main.temp);
    visibility.innerText=data.visibility+'m'
    wind.innerText=data.wind.speed +'m/s'
    sun.innerText=data.clouds.all + '%'
    time.innerText=new Date().toLocaleString();
    shortDesc.innerText=data.weather[0].main;
    }else{
        document.querySelector('.content').classList.add('hide')
        

    }
}

search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        let input = search.value.trim();
        changeWeatherUI(input||undefined)
    }
})

changeWeatherUI('hanoi')

