import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'

const Login = () => {

    const [succsessState, setSuccsessState] = useState(false)


    const handleSignin = (event) => {
        // try this user
        // {
        //     "email": "ahmed@example.com",
        //     "password": "H3h@.%6ji3dhewihdi"
        //   }
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = { 'email': email, 'password': password };

        fetch("http://talabat.runasp.net/api/Account/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.status === 200) //success
                    setSuccsessState(true)
                return response.json();

            })

            .then((jsonData) => {
                console.log(jsonData);
                if (succsessState) {
                    localStorage.setItem("token", jsonData.token)
                    console.log("token added to local storage")
                }

                // Handle your response data here (e.g., update state, redirect, etc.)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle any error that occurred during fetch
            });


    };

    const handleSignup = (event) => {
        event.preventDefault();
        //     const form = event.target;
        //     const email = form.email.value;
        //     const password = form.password.value;
        //     const data = {'email': email, 'password':password };

        //     fetch("http://talabat.runasp.net/api/Account/login", {
        //       method: "POST",

        //       body: JSON.stringify(data),
        //     })
        //     .then((response) => {

        //         if (!response.ok) {
        //           throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //       })

        //       .then((jsonData) => {
        //     console.log(jsonData);
        //     // Handle your response data here (e.g., update state, redirect, etc.)
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //     // Handle any error that occurred during fetch
        //   });
    };




    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false} />

            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    alt='login' />

                <form onSubmit={handleSignin} className='authform'>
                    <h1>Login</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>

                    {/* <Link to='/forgotpassword'
                        className='stylenone'
                    >
                        <p>Forgot password?</p>
                    </Link> */}

                    <button type="submit" className='btn' >Login</button>
                    <h2 className='or'>OR</h2>
                    <button onClick={handleSignup} className='btn'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Login