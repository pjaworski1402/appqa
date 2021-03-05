import React from 'react';
import styled from 'styled-components';

import {Login, Register} from '../layouts/auth/Auth'

const Auth = (props) => {
    return ( 
        <>
            {props.auth==="login"?(
                <Login />
            ):(
                <Register />
            )}
        </>
     );
}
 
export default Auth;