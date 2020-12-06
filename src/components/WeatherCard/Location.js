import React, { useState } from 'react';
import styled from '@emotion/styled';

const Location = ({city,country,getWeather}) => {
const[query1,setQuery1]=useState('43.6532');
const[query2,setQuery2]=useState('-79.3832');


const[inputMode, setInputMode]= useState(false);
 
    return ( 
        <Container>
            {!inputMode && <City onClick={()=>setInputMode(true)}>{city}</City> }
            {inputMode && (   <form onSubmit={e=>{
                e.preventDefault();
                getWeather(query1,query2)
                
                }}>
          <input placeholder="Latitude"
          
          value={query1}   onChange={(e)=>setQuery1(e.target.value)} 
          />
          <input placeholder="Longitude"
          value={query2}  onChange={(e)=>setQuery2(e.target.value)} 
          />
                <button type="submit">Search</button>
                <button onClick={()=>setInputMode(false)}>Cancel</button>   
                
            </form> )}
              
             
            <Country>{country}</Country>
        </Container>            
     );
}
 
export default Location;
const Container = styled.div`    
text-align: center;      
`
const City =styled.h1`
font-family: 'Merriweather', sans-serif;
font-size: 1.6rem;
position:relative;
cursor:pointer;
&:hover{
    top:-5px
}
;
`
const Country =styled.h3`
font-family: 'Fira Sans' ,sans-serif;
font-size: 1.1rem;
`