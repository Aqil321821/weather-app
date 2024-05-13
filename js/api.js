
const apiKey = 'FdLR7pAVxKdCA3c3yMSvenWGuStcfHfh';

//function to get city code from api

const getCityCode = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    // now make a fetch equest to this combined url

    const response = await fetch(base + query);
    const data = await response.json();


    // console.log(data[0].Key);
    return data[0];


};


// as getCity is async function this returns a promise so we can handle this with .then()


// getCityCode('Karachi')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));





// now using that key we will get the weather information


const getWeather = async (cityKey) => {

    // we need to send request to base address + cityCode + q parameter which is apiKey

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${cityKey}?apikey=${apiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data);
    // console.log(data[0]);
    return data[0];


};


// now fisrt call the 'getCityCode' and get the cityKey  then inside that function call the getWeather() and pass that key to it



// getCityCode('Karachi')
//    .then(data=>{
//          return getWeather(data.Key)}
//         )
//  .then(weather=>console.log(weather) )
// .catch(err=>console.log(err));


