import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TopNav from "./layouts/topNav/TopNav"
import Start from "./pages/Start"
import Auth from "./pages/Auth"
import Panel from "./pages/Panel"

function App() {
  return (
    <>
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
