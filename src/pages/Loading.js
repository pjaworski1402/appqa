import React, { useEffect } from "react";
import styled from "styled-components";
import { getCookie, setCookie } from "../utils/Cookies";
import { useDispatch } from "react-redux";
import { userData } from "../redux/actions/index";
import Strapi from "../api/Strapi";

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: #fff;
`;

const Loading = ({ setLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateUserInfo = (res) => {
      if (res.status === 200) {
        dispatch(userData({ isLogged: true, ...res.data }));
        setLoading(false);
      } else {
        setCookie("ssid", "");
        setLoading(false);
      }
    };

    let jwt = getCookie("ssid");
    if (jwt !== "") {
      const api = new Strapi();
      api.getUserInfo(updateUserInfo);
    } else {
      setLoading(false);
    }
  }, [dispatch, setLoading]);

  return <LoadingWrapper>Ładowanie ...</LoadingWrapper>;
};

export default Loading;
