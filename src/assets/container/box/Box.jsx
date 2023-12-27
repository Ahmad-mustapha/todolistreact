import React from 'react'
import './box.css'
import { FaRegCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { RiGalleryFill } from "react-icons/ri";
function Box({ iconType, title, content, btn1, btn2 }) {
  let ti;
  if (iconType === 'first') {
    ti = <FaRegCircle />
  }
  else if(iconType === 'second'){
    ti = <FiFileText />
  }
  else if (iconType === 'third') {
    ti = <RiGalleryFill />
  }
  else{
    ti = <FaRegCircle />
  }
  return (
    <div className='todoList__box'>
      {/* <FaRegCircle style={{fontWeight: '700'}}/> */}
      {/* {title == 'Ideation & Validation': <FiFileTexst />? <FaRegCircle />} */}
      {ti}
      <div className="todoList__box-content">
        <p>{title}</p>
        <p>{content}</p>
        <div className="twoBtns">
          <button>{btn1}</button>
          <button>{btn2}</button>
        </div>
      </div>
    </div>
  )
}

export default Box
