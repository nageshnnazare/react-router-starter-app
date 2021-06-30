import "./App.css";

import { BrowserRouter, /*Redirect,*/ Route, Switch } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Post from "./Pages/Post";

function App() {
  const [login, setlogin] = useState(false);

  return (
    // <BrowserRouter basename="/tutorial">
    // <BrowserRouter forceRefresh">
    // <BrowserRouter
    //   getUserConfirmation={(msg, callback) => {
    //     callback(window.confirm());
    //   }}
    // >
    <BrowserRouter>
      <div className="App">
        <Header />

        <button onClick={() => setlogin(!login)}>
          {login ? "logout" : "login"}
        </button>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile">
            {/* {login ? <Profile /> : <Redirect to="/" />} */}
            <Profile login={login} />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
