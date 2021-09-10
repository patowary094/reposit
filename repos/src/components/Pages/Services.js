
import React from 'react'
import pic3 from "./Images/pic12.jpg";
import pic2 from "./Images/pic13.jpg";
import pic7 from "./Images/pic7.jpg";

function Services() {
    return (
<>
    <div classNameName="container">

 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-indicators">
     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   </div>
   <div className="carousel-inner">
     <div className="carousel-item active">
       <img src={pic3} className="d-block w-100" alt="logo"/>
       <div className="carousel-caption d-none d-md-block">
         <h5>The first Content</h5>
         <p>Some representative placeholder content for the first slide.</p>
       </div>
     </div>
     <div className="carousel-item">
       <img src={pic2} className="d-block w-100" alt="..."/>
       <div className="carousel-caption d-none d-md-block">
         <h5>Second Content </h5>
         <p>Some representative placeholder content for the second slide.</p>
       </div>
     </div>
     <div className="carousel-item">
       <img src={pic7} className="d-block w-100" alt="erorrrrr"/>
       <div className="carousel-caption d-none d-md-block">
         <h5>Third Content</h5>
         <p>Some representative placeholder content for the third slide.</p>
       </div>
     </div>
   </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
 </div>
            
         </div>

        



</>
    )
}

export default Services
