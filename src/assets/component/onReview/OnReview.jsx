import React from 'react'
import Box from '../../container/box/Box'
import './onReview.css'
function OnReview({ type }) {
  return (
    <div>
      <div className="todoList__status-heading">
        <p>On Review</p>
        <p style={{color: 'white', backgroundColor:'blue'}}>2</p>
      </div>
      <div className="todoList__status-list">
        <Box iconType={type} title='Ideation & Validation' content='What can happen if high blood pressure is left untreated' btn1='GROUP 1'/>
        <Box iconType='gallery' title='Ideation & Validation' content='What can happen if high blood pressure is left untreated' btn1='Lesson 1' btn2='GROUP 2'/>
        <Box iconType='gallery' title='Ideation & Validation' content='What can happen if high blood pressure is left untreated' btn1='GROUP 3'/>
      </div>
    </div>
  )
}

export default OnReview
