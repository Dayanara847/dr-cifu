import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe";
import AboutTherapy from "./components/AboutTherapy";
import Contact from "./components/Contact";
import store from "./components/store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/aboutme" component={AboutMe}></Route>
          <Route exact path="/aboutTherapy" component={AboutTherapy}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
