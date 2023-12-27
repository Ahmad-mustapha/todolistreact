import React from 'react'
import './container.css'
import LessonBoard from '../../component/lessonBoard/LessonBoard'
import SecondRow from '../../component/Backlog/SecondRow'
import OnReview from '../../component/onReview/OnReview'

function Container() {
  return (
    <div className='todoList__Container'>
      {/* <Status /> */}
      <LessonBoard type='first'/>
      <SecondRow type='second'/>
      <OnReview type='third'/>
    </div>
  )
}

export default Container
