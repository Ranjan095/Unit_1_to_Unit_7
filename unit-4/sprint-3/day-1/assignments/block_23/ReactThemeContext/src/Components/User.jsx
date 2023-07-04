import React from 'react'
//,name,position,level,points,img
export default function User({isDarkTheme,user}) {
 let {name,position,level,points,img}=user
    
 console.log(isDarkTheme)
    return (
        <div data-testid = "user" style={{display:'flex', color:isDarkTheme?'white':'black' }} >
           <div>
           <img src={img} width='100px'/>
           </div>
           <div>
             <h1>{name}</h1>
            <h2>{position}</h2>
            <input data-testid = "level" type = "range" style={{accentColor:isDarkTheme?'yellow':'blue'}}/>
            <h2>Professional Level {level}</h2>
            <h1>{points} Points</h1>
            </div>
        </div>
    )
}
