import React from 'react';
import styled from '@emotion/styled'

import Location from  './Location'
import Condition from './Condition';
import Icon from './Icon'








const WeatherCard  = ({temp,condition,city,country,wind,humidity,feels,icon,getWeather}) => { // pasing object instad of propos.temp etc...
    let highColor=0; // we need to decalre it here othre weise we will get not declare erroe
    let lowColor =0;
    let bg= null; // declare varible for baground 
        if(temp>12) // this is fro hot weather
        {
             highColor = (1-((temp-12)/28))*255;
             lowColor= highColor-200;
             bg= `linear-gradient(to top, rgb(255,${highColor},0),rgb(255,${Math.abs(lowColor)},0))`; // aplly stule baseed on passed value
        }
        else if (temp<= 12) // this for cold weater
        {
             highColor = (1-((temp+20)/32))*255;
             lowColor= highColor-200;
             bg= `linear-gradient(to top, rgb(0,${highColor},255),rgb(0,${Math.abs(lowColor)},255))`;
        }
        //console.log(icon)
    const Card = styled.div`
    

    margin: 0 auto;
    background: ${bg};
    background-size: 100%;
    outline: 4px solid black;
    box-shadow: 18px 22px 35px -6px rgba(0,0,0,0.75);
    min-height: 460px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 460px;
    width: 380px;
  
 
    
`
    return (
        <Card >         
            <Location  getWeather ={getWeather} city ={city} country={country}/>
            <Icon condition={condition} icon={icon}/>
            <Condition temp ={temp} condition = {condition} wind={wind} humidity={humidity} feels={feels} />
            

        </Card>
        
      );
}
 
export default WeatherCard ;