import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import UserContextProvider from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from "./config/firebaseConfig"

//init firebase app

firebase.initializeApp(firebaseConfig)
const App =()=> {
  return (
    <Router>
      <ToastContainer/>
      <UserContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
        <Footer/>
      </UserContextProvider>
    </Router>
  );
}

export default App;
