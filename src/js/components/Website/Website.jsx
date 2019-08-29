import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
const Website = () => {
  return(
<div>
<Nav/>
<div className="services-page">
  

<div className="next1">
<div className="ank1">
<a href="/" > Home</a> | Digital Marketing | Website
</div>
<div className="skew-side">
<h4> Request a Qoute or
  799-899-677</h4>
</div>
</div>
  <div className="digital-marketing">
<div className="digital-marketing-info">
  
<h1 >WEBSITE EXPERTISE YOU CAN RELY ON</h1>
  
  <p  className="text-dark">In today’s market, customers make decisions about your business before they even speak to you.
         And their decisions to purchase are based on their online 
        experience – specifically the appearance, usability and accessibility of your website. </p>
 
      <p  className="text-dark">Infront Webworks is a trusted Google partner and award-winning
           website development company with expertise in planning and building websites, SEO,
            digital marketing and cloud services. For more than 20 years, we've been building 
            world-class websites and web applications, drawing visitors to clients' 
          websites, and delivering exceptional email, hosting, vpn and virtual server related services. 

</p>
<p  className="text-dark">
Our team of award-winning website development and design experts collaborate across specialties
 to produce powerful results for your business. With Infront, you will work with highly-innovative 
 staff, including designers, programmers, database
 engineers, cloud engineers, production managers, marketing SEO specialists, and support staff. 
</p>
<p  className="text-dark">
All of our processes, experience and skills combine to deliver a visually compelling, functionality
 rich experience for your customers. Your business will also benefit
 from a set of professional, reliable tools supported by a team of world-class website experts. 
</p>
 
</div>
<aside>
<div className="side-part2">

<h1>START THE CONVERSATION</h1>
<div className="input-fields">
  <div className="input-list2">
   <div className="one">
   <label > Firstname</label><br/>
    <input type="text" name="lastname"/>
   </div>
  <div className="two2">
  <label > Lastname</label><br/>
    <input type="text" name="lastname"/>
  </div>
    <div className="three">
    <label > Company Name</label><br/>
    <input type="text" name="lastname"/>
    </div>
  <div className="four2">
  <label > Email</label><br/>
    <input type="text" name="lastname"/>
  </div>
  <div className="five">
  <label > Phone Number</label><br/>
    <input type="text" name="lastname"/>
  </div>
  <div className="six2">
  <label > Website</label><br/>
    <input type="text" name="lastname"/>
  </div>
  <form >
  <div className="seven2">
    <label > Project Description</label><br/>
    <input type="text" name="project"/>
  </div>
  <div className="eight2">
    <label > How did you hear about us? *</label><br/>
   <select name="">
     <option  value="selct" selected> Please Chose</option>
     <option value="f"> Google Chose</option>
     <option value="s"> Facebook </option>
     <option value="t"> Social media posts</option>
   </select>
  </div>
  <button className="btn btn-info my-4"> Submit</button>
  </form>
  </div>

</div>
</div>
</aside>
  </div>

<div className="orange-banner website-banner">
  <h2>Just a simple site?  Or complex custom coding?</h2>
  <p>nfront is one of the few digital agencies that has extensive
       experience creating sites from one end of the spectrum to the other. 

</p>
</div>
<div className="website-info text-dark">

    <h3>  UPDATING AN EXISTING WEBSITE?  </h3>
    <p>
    We can help with that too, and have extensive experience moving existing websites into modern platforms. Together, we will discuss tools that not only make it easier to manage your website but enhance its functionality with newer applications. If you've outgrown your website, give us a call. 
    <br/> <br/> If you're afraid to find out how much it will cost to replace a site that was expensive a decade ago, let's talk. We can help you work through ROI and collaborate on a phased approach that works for your budget, the future growth of your business and your site users. <br/> 

It's not just our job, it's our craft.  We like to become part of our clients' team; you can think of us as an extension of your staff.  We are transparent in our processes, honest in our communication and committed to your success. <br/> <br/>

We've made a science of finding and using the best technologies for the job. Our focus on user experience means your content will be accessible to all types of people and devices, delivering the brand experience your customers desire. <br/>
    </p>
    <p>Website development we love to do:</p>
    <ul>
        <li><a href="#"> Small Business Websites</a></li>
        <li><a href="#"> Responsive & Mobile Websites</a></li>
        <li><a href="#"> WordPress Websites</a></li>
        <li><a href="#"> Sitefinity Websites</a></li>
        <li><a href="#"> Custom Web Applications</a></li>
        <li><a href="#"> View our Website Portfolio</a></li>
    </ul>
  
</div>
  
<div className=" website-banner-2">
  <h2>Looking for more info?</h2>
  <p>Try our portfolio page, where you can see a small sample of the hundreds of sites we've built. 
       Or check out the answer to a question we are often asked 'What does a website cost?' 

</p>
</div>
<aside className="banners">
      <div className="banners-1">
      <img src="../images/google-reviews.jpg" alt=""/>
      <p>
      "Infront Webworks has been great to work with, and the results are undeniable. 
      They have updated my website for me, and have been handling my SEO, and business has 
      increased as a direct result.  
      Their staff has treated me very professionally, and keep me updated every step of the way."</p>     
        
      <h4>
      Q. White  (Fidelity Mortgage Solutions)
      </h4>


      </div>
      <div className="banner-2">
      <img src="../images/wolfe.jpg" alt=""/>
     <div className="audit">
     <h4>Free SEO Audit</h4>
      <h5>Why aren't you #1 in search</h5>
      <p>We'll provide you with a free, no-obligation report that will give you powerful
         insight into how your website stacks up against the competition and ranks in the Search Engines. </p>
         <button className="btn btn-info"> Get Your Seo Audit</button>
     </div>
      </div>
      </aside> <br/> <br/> <br/> <br/>
</div>

<Footer/>
</div>
  )
};
export default Website;