import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ApiConnection from "./api/ApiConnection";

import TopNav from "./layouts/topNav/TopNav";
import Start from "./pages/Start";
import Auth from "./pages/Auth";
import Panel from "./pages/Panel";
import Loading from "./pages/Loading";

function App() {
  const [strapiConnectionStatus, setStrapiConnectionStatus] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const strapiConnection = new ApiConnection();
    strapiConnection.checkConnect(setStrapiConnectionStatus);
  }, [strapiConnectionStatus]);

  return (
    <>
      {isLoading ? <Loading setLoading={setLoading} /> : null}
      <Router>
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/auth/login">
            <Auth auth="login" />
          </Route>
          <Route path="/auth/register">
            <Auth auth="register" />
          </Route>
          <Route path="/user/panel">
            <Panel />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
