import React from "react";

const BlogView = () => {
  return <div className="blog">

    <div className="side-pic">
      <img src="../images/marketing.jpg" alt=""/>
    </div>
    

<div className="infront-blog">
  <h1>The InFront Blog</h1>
  <div className="tik"><h3>Website Tips & Tricks</h3></div>
 <div className="para"> <p>Tips to improve your website, user experience,
     conversion rate, website search ranking, develop quality 
     content and keep you up to date on the latest in internet compliance, 
     trends and Infront News.</p></div>
     <button type="button" class="btn btn-info"> Read More</button>
</div>


<div className="search-bank">
 <h1>Top Search Rank </h1>
 <div className="tik">
 <h3>Award Winning SEO</h3>
 </div>
 <div className="para">
 <p>SEO programs engineered to deliver results month after month by a nationally
     recognized team of Search Engine Optimization
      (SEO) & Search Engine Marketing (SEM) experts.</p>
      <button type="button" class="btn btn-info"> Read More</button>
 </div>
</div>

  </div>;
};

export default BlogView;
