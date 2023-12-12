import React from 'react'

function Footer() {
    return (
        <>
            {/* <!-- ===footer==== --> */}

            <footer className="img_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mb-3">
                            <img className="img-fluid" src="images/logo.png" alt="" />
                            <p>OTOBUCKS is a one-stop shop for all your car needs. We can help you find a workshop, and spare parts, and even rent or buy a car. 
                                You can also take care of your car insurance and car loans in one place</p>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-3">

                            <ul>
                                <h3>Company</h3>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Features</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 mb-3">

                            <ul>
                                <h3>Legal</h3>
                                <li><a href="#">End user Agreement</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and Condition</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 mb-3">
                            <h3>Contact</h3>
                            <p>Suite 300 9850 King George Blvd Surrey, British Columbia V3T 4Y3, Dubai</p>
                            <p>+971 542 - 457866</p>
                            <p>info@otobucks.com</p>
                            <div className="icons">
                                <span><i className="fa-brands fa-facebook-f"></i></span>
                                <span><i className="fa-brands fa-instagram"></i></span>
                                <span><i className="fa-brands fa-linkedin"></i></span>
                                <span><i className="fa-brands fa-twitter"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer_bottom">
                <p>Copyright © 2023 otobucks</p>
            </div>
        </>
    )
}

export default Footer
