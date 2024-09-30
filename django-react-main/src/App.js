// frontend/src/App.js
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from "react";
import Main from "./components/Main";
import Students from "./components/Students"
import Cart from "./components/cart/Cart"
import business from "./components/business";
import SNO from "./components/SNO";
import Login from "./components/Login";
import News from "./components/News";

class App extends React.Component {
  state = {
  };
  render() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
             <Route exact path="/Main" component={Main} />
             <Route path="/business" component={business} />
             <Route path="/SNO" component={SNO} />
             <Route path="/Catalog" component={Students} />
             <Route  path="/Cart" component={Cart} />
             <Route  path="/login" component={Login} />
             <Route  path="/news" component={News} />
             <Route  path="" component={Main} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}}

export default App;

