import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import { ThemeProvider } from "styled-components";

function App({ authService }) {
  const theme = {
    palette: {
      blue: "#1d2088",
      white: "#fff",
      boxColor: "#C1D72A",
      black: "#000",
    },
  };

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
