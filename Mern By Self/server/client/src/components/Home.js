import React from 'react'
import home2 from '../images/home2.jpg';
import home1 from '../images/home1.jpg';
import confess1 from '../images/confess1.jpg';
import nikku from '../images/nikk.jpeg';
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12 col-12 col-lg-12 col-sm-12 col-xs-12 mx-auto">
                        <img src={home1} className="logo" alt="" />
                    </div>
                    <div className="col-md-12 col-12 col-lg-12 col-sm-12 col-xs-12 mx-auto">
                        <img src={confess1} className="logo" alt="" />
                    </div>
                    <div className="col-md-12 col-12 col-lg-12 col-sm-12 col-xs-12 mx-auto">
                        <img src={home2} className="logo" alt="" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-6 col-6 mx-auto d-md-flex justify-content-around flex-row">
                        <div className="profile-img">
                                <img src={nikku} className='logo' alt="" />
                        </div>
                       <div className="mt-4">
                       <h3 className="text-left text-danger">Neeraj <span className='text-danger'>Choubisa</span></h3>
                       <p className="text-left">
                       " Many of life’s failures are people who did <br /> not realize how close they were to success when they gave up. " <br /><span className='text-info'>–Thomas A. Edison</span>
                       </p>
                       </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;
