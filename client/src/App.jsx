import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Form from './Views/Form/Form';
import Details from './Views/Details/Details';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
              <Route path={"*"} component={Navbar}/>
          <Switch>
              <Route exact path={"/"} component={Landing} />
              <Route path={"/home"} component={Home} />
              <Route path={"/form"} component={Form} />
              <Route path={"/details/:id"} component={Details} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
