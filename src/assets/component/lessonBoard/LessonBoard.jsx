import React from 'react'
import Box from '../../container/box/Box'
import './lessonBoard.css'
function LessonBoard({ type }) {
  return (
    <div>
      <div className="todoList__status-heading">
        <p>Lesson Board</p>
        <p>3</p>
      </div>
      <div className="todoList__status-list">
        <Box iconType={type} title='Ideation & Validation' content='What can happen if high blood pressure is left untreated' btn1='Lesson 1' btn2='Reminder'/>
        <Box iconType={type} title='Ideation & Validation' content='What can happen if high blood pressure is left untreated' btn1='Lesson 1' btn2='Reminder'/>
        <Box iconType={type} title='Ideation & Validation' content='What can happen if high blood pressure is left untreated' btn1='Lesson 1' btn2='Reminder'/>
      </div>
    </div>
  )
}

export default LessonBoard
