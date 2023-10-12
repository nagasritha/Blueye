import {AiOutlineLinkedin,AiFillInstagram,AiFillFacebook,AiFillYoutube,AiFillTwitterCircle} from 'react-icons/ai'
import './index.css'

const EndCard=()=>(
    <div className='end-card'>
        <div>
           <h1>BLUEYE NEWSLETTER</h1>
            <p>Subscribe to our weekly newsletter to stay updated on the latest Blueye news!</p>
            <hr/>

            <h3>Blueye, Transittgata 10, Trondheim, 7042, Norway
             MVA 915 666 450</h3>
            <h3>+47 40 00 46 43</h3>
            <h3>contact@blueye.no</h3>
        </div>
        <div>
            <h1>READ MORE</h1>
            <hr/>
            <h3>Industries</h3>
            <h3>products</h3>
            <h3>Articles</h3>
            <h3>Support Us</h3>
        </div>
        <div>
            <h1>SOCIAL MEDIA</h1>
            <div className='flex-row'>
                <a href='https://no.linkedin.com/company/blueye-robotics'>
                    <AiOutlineLinkedin/>
                </a>
                <a href='https://www.instagram.com/blueyerobotics/'><AiFillInstagram/></a>
                <a href='https://www.facebook.com/blueyerobotics/'><AiFillFacebook/></a>
                <a href='https://www.youtube.com/c/BlueyeRobotics'><AiFillYoutube/></a>
                <a href='https://twitter.com/blueyerobotics'><AiFillTwitterCircle/></a>
            </div>
            <hr/>
             <br/>
            <h3>Privacy Policy</h3>
            <h3>Cookies Setting</h3>
        </div>
    </div>
)

export default EndCard