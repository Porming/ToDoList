import './App.css'
import { TodoWrapper } from './componets/TodoWrapper'

function App() {
  return (
    <>
      <div className="app">

        <TodoWrapper />
        <div className='footer'>
          <p>You have 0 to do</p>
        </div>

      </div>
    </>
  )
}

export default App
