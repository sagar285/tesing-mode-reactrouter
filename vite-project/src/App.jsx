import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Form from './component/Form'
import Login from './component/Login'


const App = () => {
  
  return (
    <>
    
   <Router>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/news' element={<Login/>}/>
      
    </Routes>
   </Router>

   </>
  )
}

export default App