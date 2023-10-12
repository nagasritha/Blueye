import EndCard from '../EndCard'
import Header from '../Header'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Contactus=()=>{
const token=Cookies.get("jwt_token")
if(token===undefined){
    return <Navigate replace to='/'/>
}
return <div className='container'>
    <Header/>
    <EndCard/>
</div>
}

export default Contactus
