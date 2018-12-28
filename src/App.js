import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import "./styles/App.scss";
import Main from "./components/Main";
import MovieLists from "./components/MovieLists";
import Error from "./components/Error";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/Movie-lists" component={MovieLists} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
