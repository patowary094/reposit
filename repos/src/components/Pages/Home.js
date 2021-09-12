import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      <div className="conta">
          <div className="container paragraph">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading2">Welcome To Our Website</h2>
              <div className="underline mx-auto my-2"></div>
              <p className="para3">
                Inspired by the great examples on this list, we recently reworked our
                closer.
              </p>
              <Link to="./Home" className="btn btn-success mx-3 my-2">Sign in</Link>
              <Link to="./Home" className="btn btn-success">Log in</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h2 className="heading">KNOW US</h2>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 my-3">
              <div className="cardy shadow">
                
                <div className="card-body">
                  <h6 className="miniheading">Our Team</h6>
                  <div className="para2 my-2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>


            <div className="col-md-4 my-3">
              <div className="cardy shadow">
              
                <div className="card-body">
                  <h6 className="miniheading">Our Models</h6>
                  <div className="para2 my-2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="cardy shadow">
              
                <div className="card-body">
                  <h6 className="miniheading">Our Task</h6>
                  <div className="para2 my-2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="cardy shadow">
              
                <div className="card-body">
                  <h6 className="miniheading">Our Views</h6>
                  <div className="para2 my-2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="cardy shadow">
              
                <div className="card-body">
                  <h6 className="miniheading">Our Purpose</h6>
                  <div className="para2 my-2">
                    Lorem ipsum is a placeholder text commonly visual form
                  </div>
                  <Link to="./Home" className="btn btn-warning">View more</Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

    

      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading">iPRO PROVIDES</h2>
              <div className="underline mx-auto my-2"></div>
              <p className="para">
                Inspired by the great examples on this list, we recently reworked our
                own About Us page. Perhaps not quite as amazing or inspiring as the below examples,
                but we think we’re at least a bit closer to achieving the standard the below companies have.
                And if you need help on your own page, feel free to check out our content creation services.
              </p>
              <Link to="./Home" className="btn btn-primary mx-3">Click Here</Link>
              <Link to="./Home" className="btn btn-primary">Know More</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
