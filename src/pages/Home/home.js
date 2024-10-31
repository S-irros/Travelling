import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
import Footer from './footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";


// import CardData from './index.json'; // Renamed for clarity


export default function Home() {
    const navigate = useNavigate();

    function navigateToPackageDetails(id) {
      navigate(`/package-details/${id}`);
  }

    return (
        <div className={styles.container_fluid}>
            <div className={styles.homeContainer}>
            <div className={styles.award_winning}>
                
            <div className={styles.award_meals}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('./media/meal4.jpg')} className="d-block w-100" style={{borderRadius: '13px'}} alt="Meal 1" />
            <div className="carousel-caption d-none d-md-flex" style={{flexDirection: 'column', alignItems: 'center'}}>
              <h5 style={{fontSize: '40px'}}>Date Night</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./media/meal2.jpg')} className="d-block w-100" style={{borderRadius: '13px'}} alt="Meal 2" />
            <div className="carousel-caption d-none d-md-flex" style={{flexDirection: 'column', alignItems: 'center'}}>
              <h5 style={{fontSize: '40px'}}>Casual Dining</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./media/Egypt-2JT116J-RFC.avif')} className="d-block w-100" style={{borderRadius: '13px'}} alt="Meal 3" />
            <div className="carousel-caption d-none d-md-flex " style={{flexDirection: 'column', alignItems: 'center'}}>
              <h5 style={{fontSize: '40px'}}>Hidden Gems</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./media/chicken.avif')} className="d-block w-100" style={{borderRadius: '13px'}} alt="Meal 4" />
            <div className="carousel-caption d-none d-md-flex" style={{flexDirection: 'column', alignItems: 'center'}}>
              <h5 style={{fontSize: '40px'}}>Vegan & Vegetarian</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
                <div className={styles.award_text}>
                <h3>Treat yourself to an award-winning meal</h3>
                <p>2024’s Travelers’ Choice Awards Best of the Best Restaurants</p>
                </div>
            </div>

            <section className="container mt-5" style={{width:"100%", padding:"0px", margin:"0px"}}>
          <div className="row justify-content-around">
            <div className={styles.travel_creators_text}>
            <h3 className="mt-5"><strong>Get inspired by our fave travel creators</strong></h3>
            <h5 style={{fontWeight:"20px"}}>Tried-and-true guidance to fuel your next big trip</h5>
            </div>
            <hr/>
            <div className="col-lg-4 mt-5">
                <img src={require('./media/edit pyramid.jpg')} className="card-img-top rounded" height={"60%"}/>
                <p className='text-secondary mt-3 text-center'>By <a href='#' style={{textDecoration:"none", color:"black", fontSize:"17px"}}>Youssef Elgammal</a></p>
                <div className="card-body text-center">
                  <a href="#review-link" className="h5 text-secondary link-underline-opacity-25 link-underline-opacity-10-hover">
                    Tour to Giza and Sphinx
                  </a>
                  <br/>
                  25{" "}<i className="fa-solid fa-heart" style={{ color: "red"}}></i>
                </div>
            </div>
            <div className="col-lg-4 mt-5">
                <img src={require('./media/Egypt-BJT4J1-RM_1.avif')} className="card-img-top rounded" height={"60%"}/>
                <p className='text-secondary mt-3 text-center'>By <a href='#' style={{textDecoration:"none", color:"black", fontSize:"17px"}}>Ahmad Hussein</a></p>
                <div className="card-body text-center">
                  <a href="#review-link" className="h5 text-secondary link-underline-opacity-25 link-underline-opacity-10-hover">
                  The Most Famous Egyptian Breakfast                  </a>
                  <br/>
                  50{" "}<i className="fa-solid fa-heart" style={{ color: "red"}}></i>
                </div>
            </div>
            <div className="col-lg-4 mt-5">
                <img src={require('./media/marsamatrouh_001-scaled.jpg')} className="card-img-top rounded opacity-10-hover" height={"60%"}/>
                <p className='text-secondary mt-3 text-center'>By <a href='#' style={{textDecoration:"none", color:"black", fontSize:"17px"}}>Saad Mousa</a></p>
                <div className="card-body text-center">
                  <a href="#review-link" className="h5 text-secondary link-underline-opacity-25 link-underline-opacity-10-hover">
                    Fantastic trip to Marsa Matrouh
                  </a>
                  <br/>
                  120{" "}<i className="fa-solid fa-heart" style={{ color: "red"}}></i>
                </div>
            </div>
          </div>
        </section>

<div className={styles.historical_tours_container}>
            <div className={styles.Head}>
                <h1>You might like The Historical Tours in Egypt</h1>
                <p>Discover the Timeless Wonders</p>
            </div>
            <div className={styles.historical_tours}>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('1')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
            <ul className="badges-list">
                  <li><span className="badge bg-dark best-seller-badge">Most Booking</span></li>
                </ul>
                </div>
                <img src={require('./media/great sphinix.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical private tours</h6>
                <p>Cairo: The Great Sphinx Experience, Unveiling Egypt's Timeless Wonder</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1800) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $90 <i>per Adult</i></h5>
                <span>1 day</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('1')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/Luxor.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical scheduled tours</h6>
                <p>Luxor: Shared Full-Day Tour to Luxor West and East Banks</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2600) Reviews</p>
                </div>
                <div className={styles.finalDetails}  onClick={() => navigateToPackageDetails('2')}>
                <h5 className={styles.price}> <span style={{ textDecoration: "line-through", color: "red" }}>$150</span> $120 <i>per Adult</i></h5>
                <span>3 hours</span>
                </div>
                </div>
            </div>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('3')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/mohamed ali mosque.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical private car Tours</h6>
                <p>Cairo: Citadel of Salahdin & Mohamed Ali Mosque QR Ticket</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1350) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $170 <i>per Adult</i></h5>
                <span>6 hours</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('4')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
            <ul className="badges-list">
                  <li><span className="badge bg-dark best-seller-badge">Most Booking</span></li>
                </ul>
                </div>
                <img src={require('./media/egyptian museum.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical private car tour</h6>
                <p>Egyptian Museum Entry Tickets With Pickup & Drop off</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2177) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}>$150<i> per Adult</i></h5>
                <span>3 hours</span>
                </div>                </div>
            </div>
            </div>


            <div className={styles.historical_tours}>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('5')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
            <ul className="badges-list">
                  <li><span className="badge bg-dark best-seller-badge">Most Booking</span></li>
                </ul>
                </div>
                <img src={require('./media/pyramids tour.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical private tours</h6>
                <p>Cairo: Pyramids Private Tour with Camel Ride</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1800) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $90 <i>per Adult</i></h5>
                <span>1 day</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('6')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/aswan.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical scheduled tours</h6>
                <p>Aswan: The Vally of Kings Private Tour</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2600) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> <span style={{ textDecoration: "line-through", color: "red" }}>$150</span> $120 <i>per Adult</i></h5>
                <span>3 hours</span>
                </div>
                </div>
            </div>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('7')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/aswan2.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical private car Tours</h6>
                <p>Aswan: Experience the Serenity of the Nile in Aswan</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1350) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $170 <i>per Adult</i></h5>
                <span>6 hours</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}  onClick={() => navigateToPackageDetails('8')}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
            <ul className="badges-list">
                  <li><span className="badge bg-dark best-seller-badge">Most Booking</span></li>
                </ul>
                </div>
                <img src={require('./media/qaitbay.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Cultural & Historical private car tour</h6>
                <p>Alexandria: The Historic Qaitbay Citadel Adventure</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2177) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}>$150<i> per Adult</i></h5>
                <span>3 hours</span>
                </div>                </div>
            </div>
            </div>


            </div>


            <div className={styles.historical_tours_container}>
            <div className={styles.Head}>
                <h1>Also, You might like The Modern Tours</h1>
                <p>Explore Egypt’s Modern Marvels</p>
            </div>
            <div className={styles.historical_tours}>
            <div className={styles.hist_tours}>
              <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
            <ul className="badges-list">
                  <li><span className="badge bg-dark best-seller-badge">Most Booking</span></li>
                </ul>
                </div>

                <img src={require('./media/modern/5742875-2348co.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Beach Resorts & Relaxation</h6>
                <p>Egyptian Horizons: Exploring Al Alamein and Beyond</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1800) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $90 <i>per Adult</i></h5>
                <span>1 day</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
            
                <img src={require('./media/modern/sun-capital-1673535113.webp')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Modern Urban Tours</h6>
                <p>The New Wonders of Egypt: From Al Alamein to New Cairo</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2600) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> <span style={{ textDecoration: "line-through", color: "red" }}>$150</span> $120 <i>per Adult</i></h5>
                <span>3 hours</span>
                </div>
                </div>
            </div>
            <div className={styles.hist_tours}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
            <ul className="badges-list">
                  <li><span className="badge bg-dark best-seller-badge">Most Booking</span></li>
                </ul>
                </div>
                <img src={require('./media/modern/9566387.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Beach Resorts & Relaxation</h6>
                <p>Journey Through Egypt’s Water: A Tour of El Ain El Sokhna</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1350) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $170 <i>per Adult</i></h5>
                <span>6 hours</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/modern/shutterstock_2350231743-1-1-800x565.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>City Exploration Tours</h6>
                <p>Egypt’s New Frontiers: A Tour of New Capital, and Beyond</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2177) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}>$150<i> per Adult</i></h5>
                <span>3 hours</span>
                </div>                </div>
            </div>
            </div>

            
            <div className={styles.historical_tours}>
            <div className={styles.hist_tours}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
            <ul className="badges-list">
                  <li><span className="badge bg-dark best-seller-badge">Most Booking</span></li>
                </ul>
                </div>
                <img src={require('./media/modern/مدينتى.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Modern Urban Tours</h6>
                <p>Egypt’s New Gems: Madinaty city and More</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1800) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $90 <i>per Adult</i></h5>
                <span>1 day</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/modern/jalalah.jpg')} alt="Aswan" />
                <div className={styles.tours_details}>
                <h6>Modern Urban Tours</h6>
                <p>Unveiling Egypt’s Future: An Exclusive Tour of Al Jalalah City</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2600) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> <span style={{ textDecoration: "line-through", color: "red" }}>$150</span> $120 <i>per Adult</i></h5>
                <span>3 hours</span>
                </div>
                </div>
            </div>
            <div className={styles.hist_tours}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/modern/sphinix_airport.jpg')}/>
                <div className={styles.tours_details}>
                <h6>Modern Urban Tours</h6>
                <p>Modern Egypt: A Journey to Explore Sphinx International Airport</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(1350) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}> $170 <i>per Adult</i></h5>
                <span>6 hours</span>
                </div>                </div>
            </div>
            <div className={styles.hist_tours}>
            <div className={styles.topDetails}>
            <i className=" heart-icon"><FaRegHeart style={{fontSize:"40px", padding:"10px", position:"absolute"}}/>
            </i>
                </div>
                <img src={require('./media/modern/odyssia-city_10.jpg')} />
                <div className={styles.tours_details}>
                <h6>Modern Urban Tours</h6>
                <p>Mostakbal City: Redefining Urban Life in New Cairo</p>
                <div className={styles.rating}>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarFullOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <i><TiStarHalfOutline
                style={{color:"yellow", width:"30px", height:"30px"}}/>
                </i>
                <p>(2177) Reviews</p>
                </div>
                <div className={styles.finalDetails}>
                <h5 className={styles.price}>$150<i> per Adult</i></h5>
                <span>3 hours</span>
                </div>                </div>
            </div>
            </div>


            </div>

                  </div>
            <Footer />
        </div>
    );
}
