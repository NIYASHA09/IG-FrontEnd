import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import { ReactComponent as LoginSvg } from '../../assets/loginSvg.svg'
import { ReactComponent as RegisterSvg } from '../../assets/registerSvg.svg'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Form = ({
  isSignInPage = false
}) => {
    const navigate = useNavigate()
    const [data,setData] = useState({
      ...(!isSignInPage && {username: ''}),
      email : '',
      password : ''
    })
    //console.log(data, 'data');
     
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch (`http://localhost:8000/api/${isSignInPage ? 'login' : 'register'}`,{
        method :'POST',
        headers : {
          contentType : 'application/json'
        },
        body : JSON.stringify({...data})
      })
      console.log(res, 'res');
    }
  return (
    <div className='bg-[#d2cfdf] h-screen w-full flex justify-center items-center'>
      <div className='h-[600px] w-[800px] bg-white flex justify-center 
      items-center'>
        <div className={`h-full w-full flex flex-col justify-center items-center ${!isSignInPage && 'order-2'}`}>
          <div className='text-4xl font-extrabold'>WELCOME {isSignInPage && 'BACK'}</div>
          <div className='mb-[50px] font-light'>PLEASE {isSignInPage ? 'LOGIN' : 'REGISTER'} TO CONTINUE</div>
          <form className='w-[250px]' onSubmit={(e) => handleSubmit()}>
            {
              !isSignInPage &&
              <Input label='Username' type='text' placeholder='Enter your username' value = {data.username}
               onChange = {(e) => setData({...data, username: e.target.value})}/>
            }
        <Input label='Email' type='email' placeholder='Enter your email' value = {data.email}
               onChange = {(e) => setData({...data, email: e.target.value})}/>
        <Input label='Password' type='password' placeholder='Enter your password' value = {data.password}
               onChange = {(e) => setData({...data, password: e.target.value})}/>
        <Button type={'submit'} label= {isSignInPage ? 'Sign IN' : 'Register'} className='my-5' />
          <div className='cursor-pointer text-md hover:text-blue-700 underline' onClick={() => navigate(`${isSignInPage ? '/account/signup' : '/account/signin'}`)}>{isSignInPage ? 'create new account' : 'Sign in'} </div>
          </form>
        </div>
        <div className={` h-full w-full bg-[#F2F5F8] ${!isSignInPage && 'order-1'}`}>
          {
            isSignInPage ?
            <LoginSvg width={'300px'} height={'500px'}/>
            :
            <RegisterSvg width={'300px'} height={'500px'}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Form

