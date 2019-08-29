import React from "react";

const Footer = () => {
  return <div className="footer">
    <div className="strip">
      <img src="../images/n1.png" alt=""/>
      <img src="../images/n2.png" alt=""/>
      <img src="../images/n3.png" alt=""/>
      <img src="../images/n4.png" alt=""/>
      <img src="../images/n5.png" alt=""/>
      <img src="../images/n6.png" alt=""/>
      
    </div>
    <div className="info-footer">
      <div className="first-list">
        <h3>Infront Webworks</h3>
        <p>5350 Tomah Dr #2800
Colorado Springs, CO <br/>
80918</p>
<div className="map">
  <img src="../images/capture1.png" alt=""/>
</div>
<div className="icon2">
  <label> Follow us</label><br/>
  <i class="fa fa-facebook"></i>
  <i class="fa fa-instagram fa-circle"></i>
  <i class="fa fa-twitter fa-2x"></i>
  <i class="fa fa-tumblr fa-circle"></i>
</div>
      </div>
      <div className="f2">
        <h3>Have Questions or Need Help?
</h3>
<p>SALES: (719) 577-4404 <br/>
SUPPORT: (719) 359-5540<br/>

BILLING: (719) 577-4404<br/>
FAX: (719) 630-7073 <br/></p>
<li> Open a Support Ticket</li> 
<li > Job Openings</li>
      </div>
      <div className="f3">

        <div className="l1">
          <h4> WEB </h4>
<li>Web Design</li>
<li >Development </li>
<li >Ecommerce</li>
<li> Cloud Services </li>
        </div>
        <div className="l2">
          <h4> Digital Marketing</h4>

          <li>SEO</li>
          <li>SEM</li>
          <li> Social Media </li>
        </div>
        <div className="l3">
          <h4>Cloud Services</h4>
          <li> Dommain Registration</li>
          <li>Email Services </li>
          <li> Web Hosting</li>
        </div>
      </div>
      <div className="searh">
<input type="text" placeholder="Search"/>
<button className="btn btn-info"> Search</button>
<a href=""> 
<img src="../images/google.png" alt=""/></a>
      </div>
    </div>
    <div className="copy">
      <div className="clas-info">
      <p>
       &copy; 2019 Infront Webworks
      </p>
      <ul>
        <li>Terms of Services</li>
        <li> Privacy Policy </li>
        <li>Jobs</li>
        <li>Compnay </li>
        <li>The team</li>
      </ul>
      </div>
    </div>
  </div>;
};

export default Footer;
