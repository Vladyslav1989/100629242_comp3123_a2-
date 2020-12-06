import React from 'react';
import styled from '@emotion/styled';

const Icon  = ({icon}) => {
    const Icon = styled.img`
        width: 40%;
        
    `
  
   
    return (
        <Icon style={{width:'100px'}} src= {`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon"/> // change value based on response from API
      );
}

export default Icon ;
