import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const SideBar = () => {
  return (
    <div>
        <h1>SIDEBAR...</h1>
        <ul>
            <li><Link to ="publish">publish</Link></li>
            <li><Link to ="display">display</Link></li>
        </ul>
        <div style={{marginLeft:"400px",backgroundColor:"pink",width:"300px",height:"500px"}}>
            <Outlet/>
        </div>
    </div>
  )
}
