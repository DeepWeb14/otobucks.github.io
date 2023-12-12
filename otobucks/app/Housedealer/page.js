
import React from 'react'



function House() {
    return (
        <>

            {/* <!-- ====hero section=== --> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-lg-5 pt-lg-5">
                            <div className="container">
                                <h1 className="mb-4">Premium House <span>Dealer</span></h1>
                                <p className="mb-2" style={{ lineHeight: '30px' }}>Explore our exceptional collection of high-quality vehicles, meticulously handpicked to 
                                meet your driving desires. With our extensive range of cars, exceptional customer service, and competitive prices, 
                                </p>
                                <div className="d-flex gap-3 mt-5">
                                    <a href="#"><button className="btn-web">Partner With Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 img_bg">
                            <img className="img-fluid pt-5" src="images/pngwing 27.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ====journey=== --> */}

            <section className="my-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 p-0">
                            <img className="img-fluid" src="images/pngwing 28.png" alt="" />
                        </div>
                        <div className="col-lg-7 p-lg-5">
                            <h1 className="mb-4">Where You <span>Dream House Wait!</span></h1>
                            <p>A single platform that caters to car owners. Home owners and workshops, this is your chance to get your hands on the best tools</p>
                            <div className="row number">
                                <div className="col-lg-12">
                                <div className="row text-center">
                                        <div className="col-sm-6 d-flex justify-content-around">
                                            <div className="">
                                                <h2>1</h2>
                                                <h5>Used & New Cars</h5>
                                            </div>
                                            <div className="">
                                                <h2>2</h2>
                                                <h5>Top Brands</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 d-flex justify-content-around">
                                            <div className="">
                                                <h2>3</h2>
                                                <h5>Financial Assistance</h5>
                                            </div>
                                            <div className="">
                                                <h2>4</h2>
                                                <h5>Free Inspection</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ===next Journy==== --> */}

            <section>
                <div className="container journey my-4 py-5">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-lg-7">
                            <h1>Convenience and  <span>After-Sales Support</span></h1>
                            <h4>We value your time and convenience</h4>
                            <p>Our dealers offer a range of additional services to simplify your car ownership experience</p>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-2 px-5 py-4">
                                <img className="img-fluid" src="images/pngwing 31.png" alt="" />
                                <h3>Exceptional Service</h3>
                                <p>Our friendly and knowledgeable sales team is committed to assisting you</p>
                                <button className="btn-web">Book Now
                                    <div className="book-me-btn">
                                        <div className="book-me-img1"></div>
                                        <div className="book-me-img2"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-2 px-5 py-4">
                                <img className="img-fluid" src="images/pngwing 29.png" alt="" />
                                <h3>Competitive Pricing</h3>
                                <p>We collaborate with trusted financial institutions to secure favorable terms</p>
                                <button className="btn-web">Book Now
                                    <div className="book-me-btn">
                                        <div className="book-me-img1"></div>
                                        <div className="book-me-img2"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-2 px-5 py-4">
                                <img className="img-fluid" src="images/pngwing 30.png" alt="" />
                                <h3>Unparalleled Quality</h3>
                                <p>We meticulously scrutinize every aspect of the car's performance, safety features</p>
                                <button className="btn-web">Book Now
                                    <div className="book-me-btn">
                                        <div className="book-me-img1"></div>
                                        <div className="book-me-img2"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ==contact== --> */}

            <section className="contact">
                <div className="container my-5 pb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Contact <span>Us</span></h1>
                            <p className="py-3">Support Center 24/7</p>
                            <h5>+971 542 - 457866</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p>Our Loction</p>
                                    <h4>Dubai</h4>
                                </div>
                                <div className="col-6">
                                    <p>Write To Us</p>
                                    <h4>info@otobucks.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <form action="">
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <input type="text" placeholder="Message" />
                                <button className="btn-web mt-4">Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default House
