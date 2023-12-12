
import React from 'react'

function Blog() {


    return (
        <>

            <section>
                <div className="container-fluid Blog text-center">
                    <div className="row">
                    <div className="col-lg-12">
                    <div className='blog_1'>
                    <h4>Blogs and News</h4>
                    </div>
                    <h2>LATEST BLOGS AND NEWS</h2>
                    <div className='search'>
                        <input type="text" placeholder='Search Blogs, Tags'/>
                        <button><i className='fas fa-search'></i></button>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
            <section>
        <div class="container my-5 py-3">
        <div className="row d-flex justify-content-center align-items-center text-center">
                <div className="col-lg-7">
                    <h1>Check Out Our  <span>Latest NewsAnd Blogs</span></h1>
                    <p>Don't miss out on the latest trends that's taking the world by storm</p>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-lg-5">
                    <div class="blog-card">
                        <div class="blog-card-img"></div>
                        <div class="card-date">
                            <span>17  <span>Jul</span></span>
                        </div>
                        <div class="card-comment">
                            <div>
                                <i class="fa-regular fa-comment-dots"></i>
                                <a href="#">3 Comment</a>
                            </div>
                            <div>
                                <a href="#">Read More</a>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="blog-card">
                        <div class="blog-card-img1"></div>
                        <div class="card-date">
                            <div>19  <span>Nov</span></div>
                        </div>
                        <div class="card-comment">
                            <div>
                                <i class="fa-regular fa-comment-dots"></i>
                                <a href="#">3 Comment</a>
                            </div>
                            <div>
                                <a href="#">Read More</a>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="side-news">
                        <h4>Lastest Blogs</h4>
                        <div class="row">
                            <div class="col-6">
                                <div class="side-news-img2"></div>
                            </div>
                            <div class="col-6">
                                <div>July 17, 2023</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="side-news-img3"></div>
                            </div>
                            <div class="col-6">
                                <div>Dec 4, 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="blog-card">
                        <div class="blog-card-img4"></div>
                        <div class="card-date">
                            <span>4  <span>Dec</span></span>
                        </div>
                        <div class="card-comment">
                            <div>
                                <i class="fa-regular fa-comment-dots"></i>
                                <a href="#">1 Comment</a>
                            </div>
                            <div>
                                <a href="#">Read More</a>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            

            
            

        </>
    )
}

export default Blog
