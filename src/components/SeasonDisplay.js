import React from 'react';
const SeasonDisplay =({latitude})=>{
    const getSeason =(month, lat)=>{
        if(month>2 && month<9){
            return lat?'summer':'winter'
        }
        return lat ? 'winter':'summer'
    }
    const season = getSeason(new Date().getMonth(),latitude)
    const seasonConfig ={
        winter:{
            icon:'snowflake',
            text:'Burr, go to the home'
        },
        summer:{
            icon:'sun',
            text:'Lets go to the beach'
        }

    }
    const {icon,text}= seasonConfig[season]
    return(
        <div>
            <i className={`${icon} large icon`}></i>
            <div>{text}</div>
            <i className={`${icon} large icon`}></i>
        </div>
    )
}
export default SeasonDisplay