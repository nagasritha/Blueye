import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component{
    state={
        username:'',
        password:'',
        error:'',
        success:false,
    }

    updateName=(event)=>{
        this.setState({username:event.target.value})
      }
    
    success=(token)=>{
       Cookies.set('jwt_token',token,{expires:30})
       this.setState({error:'',username:'',password:'',success:true})
    }

    updatePassword=(event)=>{
        this.setState({password:event.target.value})
    }

      submitDetails=async (event)=>{
        event.preventDefault()
        const {username,password}=this.state
        const userDetails={username,password}
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userDetails)
        }
        const url="https://backend-production-2143.up.railway.app/login"
        const details= await fetch(url,options)
        console.log(details.ok)
        const data=await details.json()
        if(details.ok){
            this.success(data.jwt_token)
        }else{
            this.setState({error:data.result})
        }
        console.log(data)
      }

      render(){
        const {username,password,error,success}=this.state
        return (
          <div className='registration'>
            <form onSubmit={this.submitDetails}>
                <h2>Enter your details to login</h2>
                <label id='username'>Username</label>
                <input type='text' onChange={this.updateName} value={username} placeholder='Enter Username'/>
                <label id='password'>Password</label>
                <input type='password' onChange={this.updatePassword} value={password} placeholder='Enter Password'/>
                <div className='align'>
                    <button type='submit'>
                        Login
                    </button>
                    <p style={{'color':'red'}}>{error}</p>
                    {success && <div>
                        <p>Your login is Successfull, Move on to <span><Link to='/home'>Home</Link></span> page</p>
                        </div>}
                </div>
            </form>
          </div>
        )
      }
}

export default Login