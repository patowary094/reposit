import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>


            <footer className="page-footer font-small bg-dark teal pt-4">
                <div className="container-fluid text-center text-md-left">
                                    </div>
<div classNameName="container my-3">
                <div className="row">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h5 className="text-uppercase">Footer Content</h5>
                                <p className="footer-content">Here you can use rows and columns to organize your footer content
                                    Here you can use rows and columns to organize your footer content.</p>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-3" />

                            <div className="col-md-3 mb-md-0 mb-3">


                                <h5 className="text-uppercase">Content Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/Home">Link</Link>
                                    </li>
                                    <li>
                                        <Link href="/About">Click-here</Link>
                                    </li>
                                    <li>
                                        <Link href="/Contact">Link</Link>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-md-3 mb-md-0 mb-3">


                                <h5 className="text-uppercase">Footer Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/Home">click-here</Link>
                                    </li>
                                    <li>
                                        <Link href="/About">Link</Link>
                                    </li>
                                    <li>
                                        <Link href="/About">Click-here</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
</div>



                <div className="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="https://mdbootstrap.com/"> iPRO.com</a>
                </div>


            </footer>

            
        </div>
    )
}

export default Footer
