/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import banner from './../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to our task management website where you can enhance and improve your task management.</p>
                    <Link to='/login'><button className="btn bg-[#11e4a5] text-white border-0">Let's Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;