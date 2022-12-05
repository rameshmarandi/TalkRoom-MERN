
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import Register from './pages/Register/Register';
import Navigation from './components/shares/Navigation/Navigation';
import Login from './pages/Login/Login';


function App() {

  return (
    <>

      <BrowserRouter>
        <Navigation />
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>



    </>
  );
}

export default App;
