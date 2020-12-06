import React from 'react';
import styled from '@emotion/styled';

const Condition = ({temp,condition,wind,humidity,feels}) => {

    const FeelsLike =styled.h3`
    font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;
    `
    const Humidity =styled.h3`
    font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;
    `
    const Wind = styled.h3`
    font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;
    `
    const Temp = styled.h1`
        font-family: 'Fira Sans' , sans-serif;
        font-size: 2rem;
        font-weight: 200;
        
    `
    const State = styled.h3`
        font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;


       
    `
    return ( 
            <>
                <Temp>{temp} °C</Temp>
                <State>{condition}</State>
                <Wind>Wind:{wind}</Wind>
                <FeelsLike>Humidity:{humidity}</FeelsLike>
                <Humidity>Feels like:{feels}</Humidity>
            </>
     );
}
 
export default Condition;