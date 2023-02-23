let submitBtn =document.querySelector('#submitBtn')
let searchcityName=document.querySelector('#cityName')
let container =document.querySelector('.container')
let displaycityname =document.querySelector('#city_name')
const day =document.querySelector('#day')
const date =document.querySelector('#today_date')
const temp= document.querySelector('#temp')
const temp_div =document.querySelector(".temp_div")

const today_date =new Date()
date.innerHTML =`  ${parseInt(today_date.getMonth())+1}/${today_date.getDate()}/${today_date.getFullYear()}`

const name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
day.innerHTML =name[today_date.getDay()]

const callEvent =async(event)=>{
    // alert('working')
    event.preventDefault();
    let searchcityval =searchcityName.value
    if(searchcityval===""){
        temp_div.classList.add("opac")
        displaycityname.innerHTML ="select the city name you want to search"
    }
    else{
        try{

            let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchcityval}&appid=915307a1613e686445e6147c55e4d679`
            const response =await fetch(url)
            const data =await response.json()
            const arrdata =[data]
            console.log(arrdata)
            temp_div.classList.remove("opac")
            displaycityname.innerHTML =` ${searchcityval}/${arrdata[0].sys.country}`
            temp.innerHTML =arrdata[0].main.temp
          
        }catch{
            displaycityname.innerHTML ="select the correct city name you want to search"

        }
       
    }
}

submitBtn.addEventListener("click", callEvent)

