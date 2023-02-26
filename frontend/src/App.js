import { Route, Switch, Link } from "react-router-dom";
import Login from "./Components/Signin";
import Signup from "./Components/Signup";
import Post from "./Components/Post";
import { useState } from "react";
import { AddPost } from "./Components/AddPost";
import { AllPost } from "./Components/Allpost";

function App() {
  const [local, setLocal] = useState(localStorage.getItem("token") || null);
  return (
    <div className="App">
      <div></div>
      <Switch>
        <Route exact path="/">
          <Login setLocal={setLocal} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        {local && (
          <Switch>
            <Route path="/allpost">
              <AllPost />
            </Route>
            <Route path="/myposts">
              <Post local={local} />
            </Route>
            <Route path="/addpost">
              <AddPost local={local} />
            </Route>
          </Switch>
        )}
      </Switch>
    </div>
  );
}

export default App;
