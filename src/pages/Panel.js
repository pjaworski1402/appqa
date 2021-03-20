import React from 'react';
import {Redirect} from "react-router-dom"
import {useSelector} from "react-redux"

import Balance from '../layouts/balance/Balance'
import Actions from '../layouts/actions/Actions'

const Panel = () => {
    const isLogged = useSelector((state)=>state.user.isLogged)
    return ( 
        <>
        {!isLogged?<Redirect to="/" />:null}
        <Balance />
        <Actions />
        </>
     );
}
 
export default Panel;