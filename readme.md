# weather app using AccuWeather API

Code Notes:
1. Register with acc-weather and get a key
2. When we wnat to get data from this api we've to make two things
      we need to make a request an endpoint  to get City Information which will have  a city code  we will use that city code to make a 2nd request to the waether conditions api endpoint so it will send back us data of that city

      
 3. we will use city search in TEXT SEARCH  of acc api to get city info
 it will have a city code then we will use that code to go on 2nd endpoint 'current condition api'

 4. bcz when we want to get current weather data from endpoint it will need a location key


 # FIRST REQUEST TO API

 first request we need to make is to Locations API to get info about a particular city then this request will send info about city from which we will obtain locationkey .

 when we hit request an locationAPI 
 http://dataservice.accuweather.com/locations/v1/cities/search

 it will need two query parameters
 1. apiKey which we get already
 2. q => which is city name we wanna search

 in response we will recieve an array of object which has similar cities info
 we will get extract a key from that and then we will use it with another request.

 when we adding query parameters we do it with a '?'


 # SECOND REQUEST TO API

 next request after that is for the current conditions in that area when we make that request we need to put that locationkey along with the request
   

   # update icon
    when we got weather object we got a property inside which is 'WeatherIcon:6'
    these are numbered from 1 to 44
    its based on weather condotion which is 'weatherText'
    so we need 44 icons svg images

    we can download these icons from climacons.com


    that weather object has also a property 
      isDayTime: true/false  
      we can show day image on that condition