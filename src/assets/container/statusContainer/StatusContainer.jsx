import React from 'react'
import './statusContainer.css'
import LessonBoard from '../../component/lessonBoard/LessonBoard'
import Backlog from '../../component/Backlog/Backlog'
import OnReview from '../../component/onReview/OnReview'

function StatusContainer() {
  return (
    <div className='todoList__statusContainer'>
      {/* <Status /> */}
      <LessonBoard type='first'/>
      <Backlog type='second'/>
      <OnReview type='third'/>
    </div>
  )
}

export default StatusContainer
