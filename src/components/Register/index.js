import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Register extends Component{
  state={
    name:'',
    username:'',
    gender:'Male',
    password:'',
    location:'',
    error1:false,
    error2:false,
    error3:false,
    error4:false,
    success:false,
    message:'',
  }

  updateName=(event)=>{
    this.setState({name:event.target.value})
  }

  updateUserName=(event)=>{
    this.setState({username:event.target.value})
  }

  updateLocation=(event)=>{
    this.setState({location:event.target.value})
  }

  updatePassword=(event)=>{
    this.setState({password:event.target.value})
  }

  updateGender=(event)=>{
    this.setState({gender:event.target.value})
  }

  submitForm=async (event)=>{
   event.preventDefault()
    const {name,password,username,location,gender}=this.state
    if(name===''){
      return this.setState(prevState=>({'error1':!prevState.error1}))
    }
    else if(username===''){
      return this.setState(prevState=>({'error2':!prevState.error2}))
    }
    else if(location===''){
      return this.setState(prevState=>({'error3':!prevState.error3}))
    }
    else if(password===''){
      return this.setState(prevState=>({'error4':!prevState.error4}))
    }
    else{
      const userDetails={
          username,name,password,gender,location
      }
      console.log(JSON.stringify(userDetails))
      const options={
          method:'POST',
          headers:{
              'Content-Type': 'application/json',
          },
          body:JSON.stringify(userDetails)
      }
      const url='https://backend-production-2143.up.railway.app/register'
      const result=await fetch(url,options)
      console.log(result)
      const data=await result.json()
      console.log(data)
      if(data.status===200){
        return this.setState({'success':true,'message':data.result, name:'',
        username:'',
        gender:'Male',
        password:'',
        location:'',
        error1:false,
        error2:false,
        error3:false,
        error4:false,})
      }
      return this.setState({'message':data.result})  

     
    }  
}

  render(){
     const {name,username,loction,gender,password,error1,error2,error3,error4,success,message}=this.state
     return (
        <div className='registration'>
          <h1>Register Here</h1>  
          <form onSubmit={this.submitForm}>
           <label htmlFor='name'>NAME</label>
           <input placeholder='Enter your full name' id='name' type='text' onChange={this.updateName} value={name}/>
           {error1 && <p style={{'color':'red'}}>*Required</p>}
           <label htmlFor='user'>USERNAME</label>
           <input autoComplete='off' placeholder='Enter Username' id='user' type='text' onChange={this.updateUserName} value={username}/>
           {error2 && <p style={{'color':'red'}}>*Required</p>}
           <label htmlFor='gender'>GENDER</label>
           <select onChange={this.updateGender} id='gender' value={gender}>
             <option value='Male'>Male</option>
             <option value='Female'>Female</option>
           </select> 
           <label htmlFor='location'>LOCATION</label>
           <input placeholder='Enter your Location' id='location' type='text' onChange={this.updateLocation} value={loction}/>
           {error3 && <p style={{'color':'red'}}>*Required</p>}
           <label htmlFor='pass'>Password</label>
           <input autoComplete='off' placeholder='Enter a strong password' id='pass' type='password' onChange={this.updatePassword} value={password}/>
           {error4 && <p style={{'color':'red'}}>*Required</p>}
           <div className='align'>
           <button type='Submit'>submit</button>
           {success ? <div>
                        <p style={{'color':'green'}}>{message} <span><Link to='/login'>Login</Link> now</span></p>
                      </div>
                      :
                      <p style={{'color':'red'}}>{message}</p>
                      }
           </div> 
           
          </form>
        </div>
     )
  }
}

export default Register