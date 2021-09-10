import React from 'react'
import { Link } from "react-router-dom";
import pic3 from "./Images/pic3.jpg";
import pic7 from "./Images/pic7.jpg";


function About() {
    return (
        <div>
            
            <div>
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading">Our Company</h2>
              <div className="underline mx-auto my-2"></div>
              <p className="para">
                Inspired by the great examples on this list, we recently reworked our
                own About Us page. Perhaps not quite as amazing or inspiring as the below examples,
                but we think we’re at least a bit closer to achieving the standard the below companies have.
                And if you need help on your own page, feel free to check out our content creation services.
              </p>
              <Link to="./Home" className="btn btn-warning">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h2 className="heading">Our Mission</h2>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 text-center">
              <h5 className="miniheading">Our Aim 1
              </h5>
              <p className="para">In publishing and graphic design,
                Lorem ipsum is a placeholder text commonly visual form of a document </p>
            </div>

            <div className="col-md-4 text-center">
              <h5 className="miniheading">Our Aim 2
              </h5>
              <p className="para">In publishing and graphic design,
                Lorem ipsum is a placeholder text commonly visual form of a document </p>
            </div>

            <div className="col-md-4 text-center">
              <h5 className="miniheading">Our Aim 3
              </h5>
              <p className="para">In publishing and graphic design,
                Lorem ipsum is a placeholder text commonly visual form of a document </p>
            </div>

          </div>
        </div>
      </section>

      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h2 className="heading">Our Vision</h2>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 my-3">
              <div className="card shadow">
                <img src={pic3} className="w-70 border-bottom img-responsive" alt="vision 1" />
                <div className="card-body">
                  <h6 className="miniheading">vision 1</h6>
                  <div className="para2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>


            <div className="col-md-4 my-3">
              <div className="card shadow">
                <img src={pic7} class="w-70 border-bottom" alt="vision 1" />
                <div className="card-body">
                  <h6 className="miniheading">vision 1</h6>
                  <div className="para2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="card shadow">
                <img src={pic3} class="w-70 border-bottom" alt="vision 1" />
                <div className="card-body">
                  <h6 className="miniheading">vision 1</h6>
                  <div className="para2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


    </div>
 <hr/>
 
 

        </div>
    )
}

export default About