
import React from 'react'



function Works() {
    return (
        <>

            {/* <!-- ====hero section=== --> */}

            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-lg-5 pt-lg-5">
                            <div className="container carousel-captio">
                                <h1 className="mb-4">How it <span>Works</span></h1>
                                <p className="mb-2" style={{ lineHeight: '30px' }}>Are you looking for a mutually beneficial partnership that drives growth, unlocks new opportunities, 
                                and propels your business to new heights? Look no further! Joining forces with OTOBUCKS 
                                </p>
                                <div className="d-flex gap-3 mt-5">
                                    <a href="#"><button className="btn-web">Partner With Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img_bg">
                            <img className="img-fluid" src="images/Mockup copy 2 1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- steo_1 --> */} 

            <section className="how-works my-5 py-3">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-4 bg_shadow d-flex align-items-center ">
                            <h1>Step <span>1</span></h1>
                            <img src="images/Rectangle 127.png" alt="" />
                        </div>
                        <div className="col-lg-7 gap-1 mx-1 d-flex right_steps">
                            <img src="images/103.png" alt="" />
                            <img src="images/101.png" alt="" />
                            <img src="images/102.png" alt="" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-lg-4 bg_shadow d-flex align-items-center ">
                            <h1>Step <span>2</span></h1>
                            <img src="images/Rectangle 127.png" alt="" />
                        </div>
                        <div className="col-lg-7 gap-1 mx-1 d-flex right_steps">
                            <img src="images/9.png" alt="" />
                            <img src="images/1.png" alt="" />
                            <img src="images/10.png" alt="" />
                        </div>
                    </div>


                    <div className="row mb-3">
                        <div className="col-lg-4 bg_shadow d-flex align-items-center ">
                            <h1>Step <span>3</span></h1>
                            <img src="images/Rectangle 127.png" alt="" />
                        </div>
                        <div className="col-lg-7 gap-1 mx-1 d-flex right_steps">
                            <img src="images/7.png" alt="" />
                            <img src="images/6.png" alt="" />
                            <img src="images/5.png" alt="" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Works
