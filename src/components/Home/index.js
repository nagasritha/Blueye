import video from '../../introVideo.mp4';
import Header from '../Header'
import {Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'
import EndCard from '../EndCard';

const Home=()=>{
  const token=Cookies.get('jwt_token')
  if(token===undefined){
   return <Navigate replace to='/'/>
   
  }
return (
    <div className="App">
     <video src={video} autoPlay loop muted plays-inline='true' className='video'/>
     <div className='container'>
        <Header/>
        <div className='home-card2'>
            <h1 className="heading1">BLUEYE UNDERWATER ROVS</h1>
            <h1 className='heading2'>YOUR EYES BELOW THE SURFACE</h1>
            <p>Professional underwater ROVs designed, developed, 
                produced, and serviced in Norway. Reliable and 
                user-friendly underwater technology for frictionless
                 access to what's below the surface.</p>
            <div>
            <button type='button'>
               7 most asked questions
            </button>
            <button type='button'>
               Explore all products
            </button>
            </div>
        </div>
        <div className='home-card2 bg'>
            <h1 className="heading1" style={{'color':'red'}}>WHY BLUEYE</h1>
            <h1 className='heading2'>Support and Help Center</h1>
            <p style={{'width':'50%'}}>We want to see you succeed with your underwater
                drone operations. If you ever find yourself in 
                need of support, our team of engineers is always available.
                <br/><br/>
                We have an excellent and organized support system to provide quick and reliable solutions to all kinds of questions and problems.</p>
            <div>
            <button type='button'>
               Read more
            </button>
            </div>
        </div>
        <EndCard/>
     </div>
    </div>
  );
}
export default Home;
