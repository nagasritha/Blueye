import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import Industry from './components/Industry'
import AboutUS from './components/AboutUS'
import Register from './components/Register'
import Contactus from './components/Contactus';
import Login from './components/Login'
import Home from './components/Home'
import './App.css';
import Articles from './components/Articles';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/industry' element={<Industry/>}/>
      <Route exact path='/about' element={<AboutUS/>}/>
      <Route exact path='/contact' element={<Contactus/>}/>
      <Route exact path='/article' element={<Articles/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;