import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatalogPage from "../pages/CatalogPage";
import index from "../pages";
import Footer from "./Footer";


export default class App extends Component{

  render() {

   return (
       <Router>
    <div className="app">
        <Route path="/" exact component={index}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/catalog" component={CatalogPage}/>
        <Route path="/contacts" component={ContactPage}/>
        <Footer/>
    </div>
       </Router>

   )
}
}