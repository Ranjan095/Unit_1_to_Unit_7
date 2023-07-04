import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTheme } from '../Redux/action';

const Theme = () => {

    let theme=useSelector((store)=>store.theme.theme);
    // console.log(theme)

let dispatch=useDispatch()

  return (
    <div>
        <button disabled={theme=='light'} onClick={()=>dispatch(handleTheme('light'))}>Switch to Light</button>
        <button disabled={theme=='dark'} onClick={()=>dispatch(handleTheme('dark'))}>Switch to Dark</button>
    </div>
  )
}

export default Theme