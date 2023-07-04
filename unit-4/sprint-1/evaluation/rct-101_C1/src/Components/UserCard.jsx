// Your code goes here
// do a default export

import React, { useState } from 'react'

const UserCard = ({name,avatar,posts,followers,address}) => {
  let [state,setState]=useState('follow')
  return (
    <div>
        <img style={{borderRadius:'50%'}} src={avatar} alt={name}/>
        <h2 data-testid="user_name">{name}</h2>
        <p data-testid = "user_address">{address}</p>
        <p data-testid = "user_posts">{posts}</p>
        <p data-testid = "user_followers">{followers}</p>
        <h3>Posts</h3>
        <h3>Followers</h3>
        <button onClick={()=>state==='follow'?setState('following'):setState('follow')}>{state}</button>

    </div>
  )
}

export default UserCard
