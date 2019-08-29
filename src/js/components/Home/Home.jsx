import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import ContactForm from "../Forms/ContactForm";
import BlogView from "../BlogView/BlogView";
import Blogpost from "../BlogPost/BlogPost";
import FeatureWork from "../FeatureWork/FeatureWork";
import BlogArticle from "../BlogArticle/BlogArticle";
import Footer from "../Footer/Footer";

const Home = () => {
  return <div>
       <Header/>
        <Nav/>
        <ContactForm/>
        <BlogView/>
        <Blogpost/>
        <FeatureWork/>
        <BlogArticle/>
        <Footer/>
  </div>;
};

export default Home;
