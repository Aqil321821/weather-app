//DOM Manipulation has to be done here


const formCity = document.querySelector('form');
const input = document.querySelector('#input');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img')


const updateUI = (data) => {

    // const cityDets = data.cityDets;

    // console.log(cityDets);
    // const weather = data.weather;

    // console.log(weather);

    // destructring in action
    const { cityDets, weather } = data;

    //now we got city name and weather info now update UI
    // we will insert into details div using innerHTML 

    details.innerHTML = `
  
  <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-5">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg; C</span>
                </div>
  
  `;

    //remove the d-none on card to show card on the dom
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }


    // now update the image and icon based on weather object

    let timeSrc=null;
    if (weather.IsDayTime) {
        timeSrc='img/day.svg';
    }else{
        timeSrc='img/night.svg'
    }
     time.setAttribute('src',timeSrc)

     //now for icons

     const iconSrc= `img/icons/${weather.WeatherIcon}.svg`;
     icon.setAttribute('src' ,iconSrc);


};







//this function runs when dom is loaded and we pass 'karachi' and then update UI
const updateUIonDom = async (karachi) => {

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    const cityDets = await getCityCode('karachi');
    const weather = await getWeather(cityDets.Key);
    console.log(weather);

    details.innerHTML = `
    
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-5">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg; C</span>
    </div>
    
    `;
    let timeSrc=null;
    if (weather.IsDayTime) {
        timeSrc='img/day.svg';
    }else{
        timeSrc='img/night.svg'
    }
     time.setAttribute('src',timeSrc);

     const iconSrc= `img/icons/${weather.WeatherIcon}.svg`;
     icon.setAttribute('src' ,iconSrc);




};
document.addEventListener('DOMContentLoaded', updateUIonDom);












navigator.geolocation.getCurrentPosition(
    (position) => {
     

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Use latitude and longitude to fetch weather data
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
        
    },
    (error) => {
        console.error("Error getting location:", error.message);

        // Handle errors such as permission denied or location unavailable
    }
);





























formCity.addEventListener('submit', (e) => {

    e.preventDefault();
    // const value= input.value;
    // console.log(value);


    //get the input city from the from input
    //here we put eventlisten on form over 'submit' through its name attribute which is 'city'
    // and then clear the form
    const cityInput = formCity.city.value.trim();
    formCity.reset();


    // now give that input value to a function  updateCity to get key and weather info
    // in that function call the both function which get city code and weather info
    updateCity(cityInput)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});

// this function will be async bcz we're getting data from api then updating the ui


const updateCity = async (city) => {


    const cityDets = await getCityCode(city);
    const weather = await getWeather(cityDets.Key);
    console.log(weather);

    return {
        cityDets,
        weather
    };


    // console.log(city);

}