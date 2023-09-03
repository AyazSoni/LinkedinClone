import './App.css';
import Login from './Component/Login.js';
import Header from './Component/header.js';
import Home from './Component/Home.js'; 
import {useEffect}from 'react';
import {UserAuth} from "./Action/index.js";
import {connect} from "react-redux";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 

function App(props) {
  {
    useEffect(() => {
     props.UserAuth();
    }
     , []
    );
  }
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route  exact path="/">
            <Login />
            
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  UserAuth: () => dispatch(UserAuth()),
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
