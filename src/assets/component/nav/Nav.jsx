import React from 'react'
import './nav.css'
import { IoMdHome } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";
import { FaMedal } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { WiDaySunny } from "react-icons/wi";
import { IoMdContact } from "react-icons/io";
function Nav() {
  const linksStyles = {
    display:'flex',
    alignItems: 'center',
    flexDirection:'column',
  }
  return (
    <div className='todoList__nav'>
      <div className="todoList__heading">
        <p>R.</p>
      </div>
      <div className="todoList__nav-sideBar">
        <ul className='todoList__nav-sideBarLinks padding__section'>
          <li>
            <a href="" style={linksStyles}><IoMdHome style={{fontSize: '1.1rem'}}/> <span>HOME</span></a>
          </li> 
          <li>
            <a href="" style={linksStyles}><IoMdChatbubbles style={{fontSize: '1.1rem'}}/> <span>CHAT</span></a>
          </li>
          <li>
            <a href="" style={linksStyles}><FaMedal style={{fontSize: '1.1rem'}}/> <span>LEARN</span> </a>
          </li>
          <li>
            <a href="" style={linksStyles}><FaPeopleGroup style={{fontSize: '1.1rem'}}/> <span>PEOPLE</span></a>
          </li>
        </ul>
        <div className="todoList__nav-sideBarIcons padding__section">
          <a href=""><BiSolidBellRing style={{color: '#888', fontSize: '1.1rem'}}/></a>
          <a href=""><WiDaySunny style={{color: '#888', fontSize: '1.35rem'}}/></a>
          <a href=""><IoMdContact style={{color: '#000', fontSize: '2rem', marginTop: '.5rem'}}/></a>
        </div>
      </div>
    </div>
  )
}

export default Nav
