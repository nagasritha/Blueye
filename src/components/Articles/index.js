import {Component} from 'react'
import {Navigate} from 'react-router-dom'
import Header from '../Header'
import EndCard from '../EndCard'
import Cookies from 'js-cookie'
import './index.css'

class Articles extends Component{
    state={
        imageUrl:'',
    }

    componentDidMount(){
        this.getData()
    }

    getData=async ()=>{
        const url='https://backend-production-2143.up.railway.app'
        const data=await fetch(url)
        const result= await data.json()
        console.log(result)
    }

    updateimageUrl=(event)=>{
        this.setState(event.target())
    }

    render(){
        const token=Cookies.get('jwt_token')
        if(token===undefined){
            <Navigate replace to='/'/>
        }
        return (
            <div className='container'>
                <Header/>
                <div className='article-bg'></div>
            <div className='div'>
              <h1>POSSIBILITIES AND EXPERIENCES WITH THE BLUEYE UNDERWATER ROVS</h1>
               <p>The Blueye team and our customers are constantly using the underwater drones in 
                new scenarios and different environments. This gives us first-hand experience from 
                real-world experiences as well as performance measurements for our technology. 
                Below you will find an overview of selected user-stories and news from Blueye.</p> 
               
              </div>
                <EndCard/>
            </div>
        )
    }
}

export default Articles