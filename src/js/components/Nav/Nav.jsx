import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return <div className="here">


<nav class="navbar navbar-expand-sm sticky-top bg-color">
                <div class="nav-logo">
                    <a href="#">
                        <img src="../images/logo.png" alt=""/>
                    </a>
                    </div>
                
                  
                  <ul class="navbar-nav whole ">
                <li class="nav-item marketing">
  
                  <Link to="/market" className="nav-link" >DIGITAL MARKETING</Link>
                  <ul class="submenu ">
                  <Link to="/seo" className="nav-link" > SEo</Link>
                      <ul class="submenu-2 ">
                      <li class="nav-item "><a class="nav-link" href="#">SEO PROGRAMS </a></li>
                      <li class="nav-item"><a class="nav-link" href="#"> GET SSL CERTIFIED</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">local seo</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">SEO CONSULTING</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">SEO WORKSHOPS</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">SEO CONSULTING</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">SEO aduit</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">WEBSITE EVALUATION</a></li>
                     
                    </ul>
                    
                    <li class="nav-item"> 
                    <Link to="/sem" className="nav-link"> Sem</Link>
                      <ul class="submenu-2 ">
                      <li class="nav-item "><a class="nav-link" href="#">adword && ppc </a></li>
                      <li class="nav-item"><a class="nav-link" href="#"> advertising managment</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">other marketing services</a></li>
                    </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">SOCIAL MEDIA</a>
                    <ul class="submenu-2 ">
                      <li class="nav-item "><a class="nav-link" href="#">  WEB DESIGN </a></li>
                      <li class="nav-item"><a class="nav-link" href="#"> DEVELOPMENT</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">ECOMMERCE</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">CLOUD SERVICES</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">DOMAIN REGISTRATION</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">EMAIL SERVICES</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">WEB HOSTING</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">MOBILE SITES</a></li>
                    </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item separate"></li>
                <li class="nav-item ">
                <Link to="/website" className="nav-link"> Website</Link>
                  <ul class="submenu ">
                      <li class="nav-item "><a class="nav-link" href="#">facebook </a></li>
                      <li class="nav-item"><a class="nav-link" href="#"> twitter</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">instagram</a></li>
                      <li class="nav-item"><a class="nav-link" href="#"> LINKEDIN</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">PINTEREST</a></li>
                    </ul>
                </li>
                <li class="nav-item separate"></li>
          
                <li class="nav-item">
                <Link to="/about" className="nav-link"> About</Link>
                  <ul class="submenu ">
                      <li class="nav-item "><a class="nav-link" href="#">THE TEAM </a></li>
                      <li class="nav-item"><a class="nav-link" href="#"> COMPANY</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">JOBs</a></li>
                    </ul>
                </li>
                <li class="nav-item separate"></li>
          
                <li class="nav-item">
                  <a class="nav-link" href="#">WORK</a>
                  <ul class="submenu ">
                      <li class="nav-item "><a class="nav-link" href="#">   PORTFOLIO </a></li>
                      <li class="nav-item"><a class="nav-link" href="#"> CASE STUDIES</a></li>
                    </ul>
               
          
                </li>
                <li class="nav-item separate"></li>
          
                <li class="nav-item">
                  <a class="nav-link" href="#">BLOG</a>
                </li>
                <li class="nav-item separate"></li>
                
                <li class="nav-item">
                  <a class="nav-link" href="#">CONTACT</a>
                  <ul class="submenu ">
                      <li class="nav-item "><a class="nav-link" href="#">   support </a></li>
                    </ul>
                </li>
              </ul>
                
              
            </nav>

              

  </div>
};

export default Nav;
