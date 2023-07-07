import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container,Row } from 'reactstrap';
import Test2 from './Companents/Test2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Container>
          <row>
            <Test2/>
          </row>
        </Container>
      </div>
     
    </>
  )
}

export default App
