import "./App.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div className="app">
      <Login authService={authService} />
    </div>
  );
}

export default App;
