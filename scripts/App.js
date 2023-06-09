const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')



const updateUI = data =>{
   
   //  const cityDets = data.cityDets
   //  const weather = data.weather
    const {weather, cityDets } = data

    // update details templete

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `
 // updating the day/night & icon images
const iconSrc =`img/icons/${weather.WeatherIcon}.svg`
icon.setAttribute('src', iconSrc)

    let timesrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
//  if (weather.IsDayTime){
//     timesrc = 'img/day.svg'

//  } else {
//     timesrc = 'img/night.svg'
//  }
 time.setAttribute('src', timesrc)

    if (card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}

const updateCity = async (city) =>{
  // console.log(city)
   const cityDets = await getCity(city)
   const weather = await getWeather(cityDets.Key)
   return { cityDets,weather}
}
 
cityForm.addEventListener('submit', e =>{
    // prevent default action
    e.preventDefault()

    // get city value

    const city = cityForm.city.value.trim()
    cityForm.reset()

    // updating the ui with new city 

 updateCity(city)
 .then(data =>{ updateUI(data)
    console.log(data)})
 .catch(err => console.log(err))

 // set localStorage
 localStorage.setItem('city',city)

})

if(localStorage.getItem('city')){
   updateCity(localStorage.getItem('city'))
   .then(data=> updateUI(data))
   .catch(err =>console.log(err))
}