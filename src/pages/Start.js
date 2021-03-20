import React from "react";
import {Redirect} from "react-router-dom"
import { useSelector } from "react-redux";

import Hero from "../layouts/hero/Hero";

const Start = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  return (
    <>
    {isLogged?<Redirect to="/user/panel" />:null}
      <Hero />
    </>
  );
};


export default Start;
