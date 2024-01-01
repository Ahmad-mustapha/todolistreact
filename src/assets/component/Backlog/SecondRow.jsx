import React from 'react'
import Box from '../../container/box/Box'
import './secondRow.css'

function SecondRow({ type }) {
  return (
    <div>
      <div className="todoList__status-heading">
        <p>Backlog</p>
        <p style={{color: 'white', backgroundColor: 'var(--primary-color)'}}>9</p>
      </div>
      <div className="todoList__status-list">
        <Box iconType={type} title='Product Course Overview' content='Think of an entrepreneur you admire. What are his or her admireable traits..' btn1='PROGRESS' btn2='GROUP 1'/>
        <Box iconType={type} title='Quiz - Startup Introduction' content='Elon Musk, not only thinks of disruptive business models like direct sales for..' btn1='STATS' btn2='GROUP 1'/>
        <Box iconType='gallery' title='Quiz - Startup Introduction' content='A "Me Too" idea takes a current idea in the market and often implements the idea in a way..' btn1='PROGRESS' btn2='GROUP 2'/>
        <Box iconType='gallery' title='Brainstorm - Generate Ideas' content='What can happen if high blood pressure is left untreated' btn1='Lesson 1' btn2='Reminder'/>
      </div>
    </div>
  )
}

export default SecondRow
