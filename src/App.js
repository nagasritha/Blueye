import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App;