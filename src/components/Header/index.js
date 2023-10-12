import {RiContactsFill} from 'react-icons/ri'
import {PiArticleMediumFill} from 'react-icons/pi'
import {FcAbout} from 'react-icons/fc'
import {GiMechanicalArm} from 'react-icons/gi'
import {BiLogIn} from 'react-icons/bi'
import {Link,useNavigate,} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header=()=>{
    const navigate=useNavigate()
    const removeCookie=()=>{
     Cookies.remove("jwt_token")
     navigate('/',{replace : true})
    }
  
    return (
        <div className='header'>
          <Link to='/home'><img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697040994/blueye_ryxax1.png' alt='logo' className='logo'/></Link>
          <div className='flex display-lg'>
            <Link to='/industry' className='link'>
              <p>Industry</p>
            </Link>
            <Link to='/article' className='link'>
              <p>Articles</p>
            </Link>
            <Link to='/about'  className='link'>
               <p>About Us</p>
            </Link>
            <Link to='/contact'  className='link'>
               <p>Contact Us</p>
            </Link>
            <Link to='/' onClick={removeCookie}>
               <button type='button'>Logout</button>
            </Link>
          </div>
          <div className='flex display-sm'>
            <Link to='/industry' className='link'>
              <p><GiMechanicalArm/></p>
            </Link>
            <Link to='/article' className='link'>
              <p><PiArticleMediumFill/></p>
            </Link>
            <Link to='/about'  className='link'>
               <p><FcAbout/></p>
            </Link>
            <Link to='/contact'  className='link'>
               <p><RiContactsFill/></p>
            </Link>
            <Link to='/' onClick={removeCookie}>
               <p><BiLogIn/></p>
            </Link>
          </div>
        </div>
    )
}

export default Header