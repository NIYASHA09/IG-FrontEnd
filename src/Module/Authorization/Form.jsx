import React from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { ReactComponent as LoginSvg } from '../../assets/loginSvg.svg';
import { ReactComponent as RegisterSvg } from '../../assets/registerSvg.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Form = ({ isSignInPage = false }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.SERVER}/api/login`, {
        username,
        password,
      });

      // Store the JWT token in localStorage or a state variable
      localStorage.setItem('user:token', response.data.token);

      // Redirect to the home page
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.SERVER}/api/register`, {
        username,
        email,
        password,
        name,
      });

      // Redirect to the login page
      window.location.href = '/account/signin';
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const backgroundImageFilename = 'background.svg';

  return (
    <div className='h-screen w-full flex justify-center items-center' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImageFilename})`, backgroundSize: 'cover' }}>
      <div className='h-[700px] w-[1000px] bg-white flex justify-center items-center'>
        <div className={`h-full w-full flex flex-col justify-center items-center ${!isSignInPage && 'order-2'}`}>
          <div className='text-4xl font-extrabold'>WELCOME {isSignInPage && 'BACK'}</div>
          <div className='mb-[50px] font-light'>PLEASE {isSignInPage ? 'LOGIN' : 'REGISTER'} TO CONTINUE</div>
          <form className='w-[250px]' onSubmit={isSignInPage ? handleLogin : handleRegister}>
            <Input
              label='Username'
              type='text'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='rounded-full'
            />
            {!isSignInPage && (
              <><Input
                label='Name'
                type='name'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='rounded-full' /><Input
                  label='Email'
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='rounded-full' /></>
            )}
            <Input
              label='Password'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded-full'
            />
            <Button type={'submit'} label={isSignInPage ? 'Sign in' : 'Register'} className='my-5' />
            <div
              className='cursor-pointer text-md hover:text-blue-700 underline'
              onClick={() => navigate(`${isSignInPage ? '/account/signup' : '/account/signin'}`)}
            >
              {isSignInPage ? 'Create new account' : 'Sign in'}
            </div>
          </form>
        </div>
        <div className={` h-full w-full bg-white flex justify-center items-center ${!isSignInPage && 'order-1'}`}>
          {isSignInPage ? <LoginSvg width={'500px'} height={'500px'} /> : <RegisterSvg width={'500px'} height={'500px'} />}
        </div>
      </div>
    </div>
  );
};

export default Form;