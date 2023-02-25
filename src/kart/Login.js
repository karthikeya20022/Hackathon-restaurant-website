import React from "react";
import './Login.css'
import { useAuth0 } from "@auth0/auth0-react";



export default function Login() {

    const { loginWithRedirect } = useAuth0()

    return (
        <div className='login_container'>
            <div className="login_container_left">
                <div className="login_container_left_text">
                    <p>A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.</p>
                </div>
            </div>
            <div className="login_container_right">
                <div className="form_container">
                    <img src="https://www.nicepng.com/png/detail/201-2018130_restaurant-symbol-png-free-wifi-restaurants.png"  alt="img" className="App90"/>
                    <form className="Suresh">

                        <button    onClick={() => loginWithRedirect()}>Login/Signup</button>
                       
                    </form>


                </div>
            </div>
             
        </div>
    )
}