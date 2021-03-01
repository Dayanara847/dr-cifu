import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import store from "./components/store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
