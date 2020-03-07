import React from 'react';
const SeasonDisplay =({latitude})=>{
    const getSeason=(lat,mont)=>{
    if(mont>2 && mont<9){
       return lat>0?'winter':'summer'
    }
     return lat<0?'winter':'summer'
    }
    const season = getSeason(latitude,new Date().getMonth())
    const textSeason ={
        winter:{
            text:'Burr, It is chilly',
            icon:'snowflake'
        },
        summer:{
            text:'Let hit the beach',
            icon:'sun'
        }
    }
    const {text,icon}  = textSeason[season]
  
    return(<div>
           <i className={`${icon} icon`}></i>
           {text}
           <i className={`${icon} icon`}></i>

    </div>)

}
export default SeasonDisplay