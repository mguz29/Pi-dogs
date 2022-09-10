import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import landingPage from "./components/Landing/landingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import DogCreate from "./components/DogCreate/DogCreate";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route path="/Home" component={Home} />
          <Route exact path="/Dogs/:id" component={Detail} />
          <Route exact path="/Dog" component={DogCreate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
