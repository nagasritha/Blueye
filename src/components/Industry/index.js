import {Navigate } from 'react-router-dom'
import Header from '../Header'
import EndCard from '../EndCard'
import Cookies from 'js-cookie'
import './index.css'

const Industry=()=>{
    const token=Cookies.get('jwt_token')
    if(token===undefined){
      return <Navigate replacec to='/'/>
    }
    return (
        <div className='container'>
           <Header/>
            <div className='industry-bg'>
              <div>
              <h1>PROFESSIONAL USE</h1>
               <p style={{'fontSize':'18px'}}>Use your own eyes to carry out underwater inspections and mapping. The Blueye underwater drones are designed to satisfy a
                 range of different industries and with a user-friendliness you normally associate with consumer technology products.</p> 
               <p style={{'fontSize':'18px'}}>Take your time to read about the different usecases for underwater drones found in this section.</p>
            
              </div>
              </div>
            <ul className='image-container'>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078248/ind8_lso15o.png' alt='ind1'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078244/ind7_dnflyw.png' alt='ind2'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078238/ind6_n3xm6c.png' alt='ind3'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078235/ind5_sbyldy.png' alt='ind4'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078207/ind4_nojfk3.png' alt='ind5'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078204/ind3_ttyxok.png' alt='ind6'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078204/ind2_gwe7up.png' alt='ind7'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078204/ind1_bwkire.png' alt='ind8'/>
                </li>
                <li>
                    <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1697078255/ind9_nu13xd.png' alt='in9'/>
                </li>
            </ul>
            <EndCard/>
        </div>
    )

}

export default Industry