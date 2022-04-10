import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <>
      <div className="App">
        <Router>
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              {user?<Home/>:<Register/>}
            </Route>
            <Route exact path="/login">
             {user?<Home/>:<Login/>}
            </Route>
            <Route exact path="/write">
            {user?<Write/>:<Register/>}
            </Route>
            <Route exact path="/settings">
            {user?<Settings/>:<Register/>}
            </Route>
            <Route exact path="/posts/:post_id">
              <Single />
            </Route>
            
          </Switch>

        </Router>

      </div>
    </>
  );
}

export default App;
