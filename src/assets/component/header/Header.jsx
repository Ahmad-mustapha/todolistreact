import React, { useState } from 'react'
import './header.css'
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState(false)

  let content;
  if (!toggle) {
    content = <BiMenuAltRight style={{fontSize: '1.6rem', fontWeight: '600', cursor: 'pointer'}} onClick={() => setToggle(true)}/>
  }else{
    content = <IoClose style={{fontSize: '1.6rem', fontWeight: '600', cursor: 'pointer'}} onClick={() => setToggle(false)}/>
  }
  return (
    <div className='todoList__header'>
      <div className="todoList__header-menu">
        {content}
        <p>Course Preparation - Product Design</p>
        {/* {
          !toggle 
          ? <BiMenuAltRight />
          : <IoClose />
        } */}
      </div>
      <div className="todoList__header-left">
        <div className="todoList__header-search">
          <input type="text" placeholder='Search...' />
        </div>
        <button>Share</button>
      </div>
    </div>
  )
}

export default Header
