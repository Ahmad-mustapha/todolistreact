import React from 'react'
import './box.css'
function Box() {
  return (
    <div className='todoList__box'>
      <ul className='todoList__box-list'>
        <li>
            <p>Ideation</p>
            <p>what can I do for you</p>
            <div className="twoBtns">
                <button>Help</button>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Box
