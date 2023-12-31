import { useState } from 'react'
import './App.css'
import Nav from './assets/component/nav/Nav'
import Header from './assets/component/header/Header'
import Container from './assets/container/statusContainer/Container'
// import Status from './assets/component/status/Status'
// import Box from './assets/container/box/Box'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='todolist__app'>
      <Nav />
      <div className="todoList__app-headerAndBody">
        <Header />
        <section className='todoList__app-mainContent'>
          <Container />
        </section>
      </div>
    </div>
  )
}

export default App
