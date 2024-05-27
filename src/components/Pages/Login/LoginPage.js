import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../../redux/authSlice';
import { useSelector } from 'react-redux';

const LoginPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const { isAuthenticated, loading, error } = useSelector((state) => state.auth)

    useEffect(() => {
        console.log("isAuthenticated:::::", isAuthenticated);
        if(isAuthenticated == true)
        {
            navigate('/dashboard');
        }
    }, [isAuthenticated]);

    const handleLogin = () => {
        dispatch(loginAsync(username, password));
      };

    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
            <h1 className='text-2xl font-medium text-black mt-4 mb-12 text-center'>
                Log in to your account 🔐
            </h1>
            <div>
                <label htmlFor='email' className="text-black">Email</label>
                    <input
                            type='email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                </div>
                <div>
                    <label htmlFor='password' className="text-black">Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        placeholder='Please input your password'
                    />
                </div>

                <div className='flex justify-center items-center mt-6'>
                    <button onClick={handleLogin}
                        className={`bg-green py-2 px-4 text-sm bg-primary text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                    >
                    Login
                </button>
            </div>
        </div>
    </div>
    );
};

export default LoginPage;
