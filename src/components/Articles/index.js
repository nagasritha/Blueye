import {Component} from 'react'
import {Navigate} from 'react-router-dom'
import Header from '../Header'
import EndCard from '../EndCard'
import Cookies from 'js-cookie'
import './index.css'

class Articles extends Component{
    state={
        imageUrl:'',
        array:[]
    }

    componentDidMount(){
        this.getData()
    }

    getData=async ()=>{
        const url='https://backend-production-2143.up.railway.app'
        const data=await fetch(url)
        const result= await data.json()
        return this.setState({array:result})
    }

    updateimageUrl=(event)=>{
        this.setState({imageUrl:event.target.value})
    }

    image=(item)=>{

        return <li key={item.id}>
            <img src={item.image_url} alt={item.id}/>
        </li>
    }

    addData=async ()=>{
        const {imageUrl}=this.state
        const details={imageUrl:imageUrl}
        console.log(JSON.stringify(details))
        const url='https://backend-production-2143.up.railway.app/addData'
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(details)
        }
        await fetch(url,options)
       
    }

    delete=async ()=>{
        const options2={
            method:'DELETE',
        }
        await fetch("https://backend-production-2143.up.railway.app/drop/26",options2)

    }

    render(){
        const token=Cookies.get('jwt_token')
        const {array,imageUrl}=this.state
        console.log(array)
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
            <div>
               <div>
               <input type='text'className='input-url' placeholder='enter article page url' onChange={this.updateimageUrl} value={imageUrl}/>
                    <button type='button' className='button' onClick={this.addData}>+Add Article</button>
               </div>
                <ul className='image-container'>
                    {array.map(item=>this.image(item))}
                </ul>
            </div>

                <EndCard/>
            </div>
        )
    }
}

export default Articles