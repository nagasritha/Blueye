
import {Link,Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import video from '../../introVideo.mp4';
import './index.css';

const WelcomePage=()=>{
  const token=Cookies.get('jwt_token');
  console.log(token!==undefined)
  if(token!==undefined){
    return <Navigate replace to='/home'/>
  }
  return (
    <div className="App">
     <video src={video} autoPlay loop muted plays-inline='true' className='video'/>
     <div className='container'>
        <div className='header'>
          <h1>Blueye</h1>
          <div>
            <Link to='/register' className='link'>
              <button type='button'>Register</button>
            </Link>
            <Link to='/login' className='link'>
              <button type='button'>Login</button>
            </Link>
          </div>
        </div>
        <div className='card2'>
            <h1>BLUEYE UNDERWATER ROVS</h1>
            <p>Professional underwater ROVs designed, developed, 
                produced, and serviced in Norway. Reliable and 
                user-friendly underwater technology for frictionless
                 access to what's below the surface.</p>
        </div>
     </div>
    </div>
  );
  }

export default WelcomePage;
