import React from 'react'
import './box.css'
import { FaRegCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { RiGalleryFill } from "react-icons/ri";

function Box({ iconType, type, title, content, btn1, btn2 }) {
  let ti;
  let button1 = 'default-button1'
  let button2 = 'default-button2'

  if (iconType === 'first') {
    ti = <FaRegCircle style={{fontSize: '1.3rem'}}/>
  }
  else if(iconType === 'second'){
    ti = <FiFileText style={{fontSize: '2rem'}}/>
  }
  else if(iconType === 'gallery'){
    ti = <RiGalleryFill style={{fontSize: '1.4rem'}}/>
  }
  else if (iconType === 'third') {
    ti = <FiFileText style={{fontSize: '1.3rem'}}/>
  }
  if (btn2 === 'GROUP 2') {
    button2 = 'yellow'
  }else if(btn2 === 'GROUP 1'){
    button2 = 'pink'
  }
  if(btn1 === 'PROGRESS'){
    button1 = 'green'
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
          <button className={button1}>{btn1}</button>
          <button className={button2}>{btn2}</button>
        </div>
      </div>
    </div>
  )
}

export default Box
