import React from 'react'
import {RiCheckboxCircleLine} from 'react-icons/ri'
import './info.css'
const Info = () => {
    return (
        <section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About Salon</span>
                            <h2>We are experts in <br/>Nail Services since 2017</h2>
                        </div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.</div>
                        <ul className="list-style-one">
                            <li><RiCheckboxCircleLine size={30}/> Verified Certificates</li>
                            <li><RiCheckboxCircleLine size={30}/> The Most Modern Equipment</li>
                            <li><RiCheckboxCircleLine size={30}/> All Quarantine Equipment is provided</li>
                        </ul>
                      
                    </div>
                </div>


                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <figure className="image-1"><img src="https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="Studio"/></figure>
                        <figure className="image-2"><img src="https://images.unsplash.com/photo-1502949298791-393048291bb8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=250&q=80" alt="Girl with red manicure"/></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Info
