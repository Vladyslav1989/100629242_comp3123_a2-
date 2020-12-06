import React, {useState,useEffect} from 'react';


import WeatherCard from "./WeatherCard/component";




const WeatherEngine=()=> {
  
  
  const [loading,setLoading] = useState(false);
  const[Error ,setError]=useState(false);  
  const[query1,setQuery1]=useState('43.6532');
  const[query2,setQuery2]=useState('-79.3832');

  
 


  const forecast = async(query1,query2)=>{    
      setQuery1('');
      setQuery2('');
      setLoading(true); 
      
    try {
      const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${query1}&lon=${query2}&exclude=hourly,minutely&units=metric&appid=e6ed261a1b37c995a7b4241421f9b180`);
      const resJson = await apiRes.json();
        setWeatherfor({
        
          temp:resJson.daily[0].temp.day,
          city:resJson.timezone,
          wind:resJson.daily[0].wind_speed,
          condition:timeConverter(resJson.daily[0].dt),
          iconName:resJson.daily[0].weather[0].icon,
          feels:resJson.daily[0].feels_like.day,
          humidity:resJson.daily[0].humidity,       
          
          temp1:resJson.daily[7].temp.day,
          city1:resJson.timezone,
          wind1:resJson.daily[7].wind_speed,
          condition1:timeConverter(resJson.daily[7].dt),
          iconName1:resJson.daily[7].weather[0].icon,
          feels1:resJson.daily[7].feels_like.day,
          humidity1:resJson.daily[7].humidity,

          temp2:resJson.daily[1].temp.day,
          city2:resJson.timezone,
          condition2:timeConverter(resJson.daily[1].dt),
          wind2:resJson.daily[1].wind_speed,
          iconName2:resJson.daily[1].weather[0].icon,
          feels2:resJson.daily[1].feels_like.day,
          humidity2:resJson.daily[1].humidity,
  
          temp3:resJson.daily[2].temp.day,
          city3:resJson.timezone,
          condition3:timeConverter(resJson.daily[2].dt),
          wind3:resJson.daily[2].wind_speed,
          iconName3:resJson.daily[2].weather[0].icon,
          feels3:resJson.daily[2].feels_like.day,
          humidity3:resJson.daily[2].humidity,
  
          temp4:resJson.daily[3].temp.day,
          city4:resJson.timezone,
          condition4:timeConverter(resJson.daily[3].dt),
          wind4:resJson.daily[3].wind_speed,
          iconName4:resJson.daily[3].weather[0].icon,
          feels4:resJson.daily[3].feels_like.day,
          humidity4:resJson.daily[3].humidity,
  
          temp5:resJson.daily[4].temp.day,
          city5:resJson.timezone,
          condition5:timeConverter(resJson.daily[4].dt),
          wind5:resJson.daily[4].wind_speed,
          iconName5:resJson.daily[4].weather[0].icon,
          feels5:resJson.daily[4].feels_like.day,
          humidity5:resJson.daily[4].humidity,
  
          temp6:resJson.daily[5].temp.day,
          city6:resJson.timezone,
          condition6:timeConverter(resJson.daily[5].dt),
          wind6:resJson.daily[5].wind_speed,
          iconName6:resJson.daily[5].weather[0].icon,
          feels6:resJson.daily[5].feels_like.day,
          humidity6:resJson.daily[5].humidity,
  
          temp7:resJson.daily[6].temp.day,
          city7:resJson.timezone,
          condition7:timeConverter(resJson.daily[6].dt),
          wind7:resJson.daily[6].wind_speed,
          iconName7:resJson.daily[6].weather[0].icon,
          feels7:resJson.daily[6].feels_like.day,
          humidity7:resJson.daily[6].humidity,   
        });
        
    } catch (error) {
        setError(true);
    }
    setLoading(false); 
  }; 

  const [weatherfor, setWeatherfor]=useState({  
    
    temp1:null,
    city1:null,
    condition1:null,
    country1:null,
    wind1:null,
    feels1:null,
    humidity1:null,
    iconName:null,
  
  })

  function timeConverter(UNIX_timestamp){ 
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    //var hour = a.getHours();
    //var min = a.getMinutes();
    //var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year ;
    return time;
  }
  
  useEffect(()=>{  
    forecast(query1,query2)  
  },[]) 
  
 
 


  



  return (  
    <div  >
            {!loading && !Error ?(
            <div className="App">
            <WeatherCard  temp = {weatherfor.temp}  condition={weatherfor.condition}  city={weatherfor.city}  country={weatherfor.country}  wind={weatherfor.wind}  humidity={weatherfor.humidity}  feels={weatherfor.feels}  icon={weatherfor.iconName} getWeather={forecast}/>
            <WeatherCard  temp = {weatherfor.temp2} condition={weatherfor.condition2} city={weatherfor.city2} country={weatherfor.country2} wind={weatherfor.wind2} humidity={weatherfor.humidity2} feels={weatherfor.feels2} icon={weatherfor.iconName2} getWeather={forecast}/>       
            <WeatherCard  temp = {weatherfor.temp3} condition={weatherfor.condition3} city={weatherfor.city3} country={weatherfor.country1} wind={weatherfor.wind3} humidity={weatherfor.humidity3} feels={weatherfor.feels3} icon={weatherfor.iconName3} getWeather={forecast}/>
            <WeatherCard  temp = {weatherfor.temp4} condition={weatherfor.condition4} city={weatherfor.city4} country={weatherfor.country1} wind={weatherfor.wind4} humidity={weatherfor.humidity4} feels={weatherfor.feels4} icon={weatherfor.iconName4} getWeather={forecast}/>
            <WeatherCard  temp = {weatherfor.temp5} condition={weatherfor.condition5} city={weatherfor.city5} country={weatherfor.country1} wind={weatherfor.wind5} humidity={weatherfor.humidity5} feels={weatherfor.feels5} icon={weatherfor.iconName5} getWeather={forecast}/>
            <WeatherCard  temp = {weatherfor.temp6} condition={weatherfor.condition6} city={weatherfor.city6} country={weatherfor.country1} wind={weatherfor.wind6} humidity={weatherfor.humidity6} feels={weatherfor.feels6} icon={weatherfor.iconName6} getWeather={forecast}/>
            <WeatherCard  temp = {weatherfor.temp7} condition={weatherfor.condition7} city={weatherfor.city7} country={weatherfor.country1} wind={weatherfor.wind7} humidity={weatherfor.humidity7} feels={weatherfor.feels7} icon={weatherfor.iconName7} getWeather={forecast}/>
            <WeatherCard  temp = {weatherfor.temp1} condition={weatherfor.condition1} city={weatherfor.city1} country={weatherfor.country1} wind={weatherfor.wind1} humidity={weatherfor.humidity1} feels={weatherfor.feels1} icon={weatherfor.iconName1} getWeather={forecast}/>
    
         
            </div>
            ):loading?(
            <div style={{color: "black"}}>Loading</div>
            ):!loading && Error?(
            <div>There has been error!<button onClick={()=>setError(false)}>Reset</button></div>
            ):null}
            
           
    </div>
    
  );
}

export default WeatherEngine;