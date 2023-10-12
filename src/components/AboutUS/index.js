import {Navigate } from 'react-router-dom'
import Header from '../Header'
import EndCard from '../EndCard'
import Cookies from 'js-cookie'
import './index.css'

const AboutUs=()=>{
    const token=Cookies.get('jwt_token')
    if(token===undefined){
      return <Navigate replacec to='/'/>
    }
    return (
        <div className='container'>
           <Header/>
            <div className='about-bg'></div>
            <div className='div'>
              <h1>OUR STORY</h1>
               <p>We believe millions could be saved, accidents reduced,
                marine life improved, and knowledge enhanced if underwater inspections were made more frequently.
                <br/>
                <br/>
                We believe in acting proactively versus reactively. Therefore, we want to empower people with user-friendly and robust underwater technology.
                <br/><br/>
                Blueye has its roots in the highly renowned Centre for Autonomous Marine Operations and Systems (AMOS) 
                at NTNU in Norway. Exceptional ease of use and robustness has been the overarching design goals since the beginning.
                 Drawing on competence from world-leading marine engineers, seasoned software developers and award-winning industrial-, mechanics- 
                 and electronics 
                designers we have created what we strongly believe are the world’s best underwater drones.</p> 
               
              </div>
           <div className='div bgcolor'>
              <h1>OUR HISTORY</h1>
              <p>Blueye was founded in 2015 by Erik Dyrkoren, Martin Ludvigsen, Christine Spiten and Erik Haugane. 
                Erik D. came from his position with SINTEF Ocean, while Martin runs the AUR-Lab at NTNU AMOS - Centre for Autonomous 
                Marine Operations and Systems. Together with Christine Spiten they joined forces to create technology that made access 
                to what´s below the surface easier. 
                Angel investor Erik Haugane liked the idea, came onboard and funded the foundation of the company.<br/><br/>
                The company originally had the consumer market in mind but as the team never compromised on creating a user 
                friendly and robust product, we pivoted into serving professional clients.
                <br/><br/>
                Blueye has delivered technology across a vast range of customer applications ranging from dam inspections, aquaculture, 
                ship inspections, law enforcement, wastewater & drinking water management, marine surveillance, tourism and education (to mention some).
                 Coming from Norway serving 
                our home market has been the focus area. Still, we are fortunate to have clients in more than 40 countries worldwide.</p>
           </div>
            <EndCard/>
        </div>
    )

}

export default AboutUs