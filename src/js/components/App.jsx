import React, { Component } from "react";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import Services from "./Services/Services";
import Seo from "./Seo/Seo";
import Sem from "./Sem/Sem";
import { Route } from "react-router-dom";
import Website from "./Website/Website";
import About from "./About/About";
class App extends Component {
  render() {
    return (
      <div className="app">
    
       
   
      

     
<Route path="/" exact component={ Home }/>
  <Route path="/market" component={ Services}/>
  <Route path="/seo" component={ Seo}/> 
  <Route path="/sem" component={ Sem}/> 
  <Route path="/website" component={ Website}/> 
  <Route path="/about" component={ About}/> 
      </div>
    );
  }
}
export default App;
