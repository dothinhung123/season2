import React from 'react';
const SeasonDisplay =({lat})=>{
    const getSeason =(month,latitude)=>{
        if(month>2 && month<9){
           return  latitude>0?'summer':'winter'
        }
        return latitude<0?'winter':'summer'
    }
    const season = getSeason(new Date().getMonth(),lat)
    const seasonConfig={
        summer:{
            text:'Great lets go the beach',
            icon:'sun'
        },
        winter:{
            text:'Burr, let go home',
            icon:'snowflake'
        }
    }
    const {text,icon} = seasonConfig[season]
    return(
        <div>
         <i className={`${icon} large icon`}></i>
         {text}
         <i className={`${icon} large icon`}></i>
              
        </div>
    )
}
export default SeasonDisplay