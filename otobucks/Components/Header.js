'use client'
import React from 'react'
import Link from 'next/link';
function Header() {

    const openNav = () => {
        const sidepanel = document.getElementById("mySidepanel");
        if (sidepanel) {
            sidepanel.style.left = "0";
        } else {
            console.error("Error: Side panel element not found!");
        }
    };

    const closeNav = () => {
        const sidepanel = document.getElementById("mySidepanel");
        if (sidepanel) {
            sidepanel.style.left = "-100%";
        } else {
            console.error("Error: Side panel element not found!");
        }
    };

    

    return (
        <>
            <header className="sticky-top">

                <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="container">
                        {/* <!-- site logo --> */}
                        <Link className="navbar-brand p-0" href="/"><img src="images/Otobucks new version logo (1) 1.png" alt="" /></Link>
                        <button className="navbar-toggler" onClick={openNav} type="button">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                            {/* <!-- menus --> */}
                            <ul className="navbar-nav d-flex gap-4 align-items-center">
                                <li className="nav-item"><Link className="nav-link p-0 active" href="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0" href="/About">About</Link></li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link mx-2 dropdown-toggle p-0" href="#" id="navbarDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="/AutoRepaire"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Auto Repair</Link></li>
                                        <li><Link className="dropdown-item" href="/CarRental"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Rentals</Link></li>
                                        <li><Link className="dropdown-item" href="/CarDealer"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Dealer</Link></li>
                                        <li><Link className="dropdown-item" href="/Housedealer"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Home Services</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link p-0 " href="/Partner">Partner</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0 " href="/Works">How It Work</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0" href="/Blog">Blogs</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0" href="/Contact">Contact</Link></li>
                                <button className="btn-trans"><a className="nav-link p-0" href="#">Login</a></button>
                                <button className="btn-web"><a className="nav-link p-0" href="#">Sign UP</a></button>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- Sidebar --> */}
                <aside id="mySidepanel" className="sidepanel">
                    <div className="sidebar">
                        <Link className="navbar-brand p-0" href="/"><img src="images/Otobucks new version logo (1) 1.png" alt="" /></Link>
                        <button className="closebtn" onClick={closeNav}><i className="fa fa-cross"></i></button>
                    </div>
                    <div>
                        {/* <!-- side menus --> */}
                        <ul>
                            <li className="nav-item"><Link className="nav-link active" href="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/About">About</Link></li>
                            <li className="pages"><a href="#">Services</a></li>
                            <li className="collapse_btn nav-item">
                                <a className="nav-link plus_collapse" data-bs-toggle="collapse" href="#pages" role="button"
                                    aria-expanded="false" aria-controls="pages">
                                    <i className="fa fa-arrow-down"></i>
                                </a>
                                <div className="collapse" id="pages">
                                    <ul>
                                        <li className="nav-item"><Link className="nav-link" href="/AutoRepaire"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Auto Repair</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/CarRental"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Rentals</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/CarDealer"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Dealer</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/Housedealer"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Home Services</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link" href="/Partner">Partner</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/Works">How It Work</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/Blog">Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/Contact">Contact</Link></li>
                            <button className="btn-trans aside-in mb-3"><a className="nav-link" href="#">Login</a></button>
                            <button className="btn-web aside-out"><a className="nav-link" href="#">Sign UP</a></button>
                        </ul>
                    </div>
                </aside>
            </header>
        </>
    )
}

export default Header
