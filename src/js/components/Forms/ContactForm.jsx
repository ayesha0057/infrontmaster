import React from "react";

const ContactForm = () => {
  return <div className="forms">
<div className="info">
  <h1> WEB DESIGN, ECOMMERCE, SEO & WEBSITE DEVELOPMENT
</h1>
<p>
Web development, SEO & digital marketing performance is easier with a team of experts.
 As a client, you are at the center of what we do – from pioneering new ways to attract
  customers to building digital solutions that make it easier to grow your business.
   As a trusted Google partner and award-winning digital marketing agency and web development
    agency, we help you grow your business, develop an expert marketing strategy and gain valuable
     insight about your customers.<br/> <br/>

Our expert team members collaborate across digital marketing specialties to produce 
powerful results. Let us build your next website taking advantage of all the latest internet
 technology, explode your online presence with a Fully Managed SEO program, and or maximize your
  ROI with our SEM experts. We've been reducing digital costs and improving website ROI's for companies
   for over 20 years. Why do we do it? Because we thrive when you do.


</p>
<div className="side-part">

  <h1>START THE CONVERSATION</h1>
  <div className="input-fields">
    <div className="input-list">
     <div className="one">
     <label > Firstname</label><br/>
      <input type="text" name="lastname"/>
     </div>
    <div className="two">
    <label > Lastname</label><br/>
      <input type="text" name="lastname"/>
    </div>
      <div className="three">
      <label > Company Name</label><br/>
      <input type="text" name="lastname"/>
      </div>
    <div className="four">
    <label > Email</label><br/>
      <input type="text" name="lastname"/>
    </div>
    <div className="five">
    <label > Phone Number</label><br/>
      <input type="text" name="lastname"/>
    </div>
    <div className="six">
    <label > Website</label><br/>
      <input type="text" name="lastname"/>
    </div>
    <form >
    <div className="seven">
      <label > Project Description</label><br/>
      <input type="text" name="project"/>
    </div>
    <div className="eight">
      <label > How did you hear about us? *</label><br/>
     <select name="">
       <option  value="selct" selected> Please Chose</option>
       <option value="f"> Google Chose</option>
       <option value="s"> Facebook </option>
       <option value="t"> Social media posts</option>
     </select>
    </div>
    </form>
    </div>

  </div>
</div>
</div>


  </div>;
};

export default ContactForm;
