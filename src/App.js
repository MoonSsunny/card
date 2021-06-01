import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";

function App({ authService }) {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
        </Switch>
        <Route path="/main">
          <Main authService={authService} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
