import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
    </div>
  );
}

export default App;
