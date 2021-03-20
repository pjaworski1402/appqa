import React from 'react';
import { useSelector } from "react-redux";
import {Redirect} from "react-router-dom"

import {Login, Register} from '../layouts/auth/Auth'

const Auth = (props) => {
  const isLogged = useSelector((state) => state.user.isLogged);

    return ( 
        <>
        {isLogged? <Redirect to="/user/panel" /> : null}
            {props.auth==="login"?(
                <Login />
            ):(
                <Register />
            )}
        </>
     );
}
 
export default Auth;