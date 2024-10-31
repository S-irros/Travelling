import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import styles from './nav.module.css'; 
import { MyContext } from '../auth/context';
import images from "../img/Egyptia_Antiqua_for_tour_guides_logo-removebg-preview.png";
import { FaSearch } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { GiEgyptianPyramids } from "react-icons/gi";
import { BiSolidCoupon } from "react-icons/bi";
import { GiThink } from "react-icons/gi";
import backImage from './media/dbc93ebc-d2f0-4f62-9721-6a53dabddfaa (1).png'


export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem('user');
    navigate('/login');
  };

  const handleSignIn = () => {
    window.localStorage.removeItem('user');
    navigate('/sign');
  }

  return (
    
    <nav id={styles.top}
    
      >
      <div className={styles.pages}>
      <div className={`${styles['container-fluid']} d-flex justify-content-between align-items-center`}>
        <img
          id={styles['top-logo']}
          src={images}
          alt="Egyptia Antiqua Logo"
          className={styles['navbar-logo']}
        />
        <div className={`${styles.navbar_links} d-flex align-items-center`}>
          <Link to="/" className={`${styles['nav-link']} mx-2`}><ImHome style={{fontSize:"30px", marginRight:"7px", marginBottom:"5px"}}/>
          Home</Link>

          <Link to="/packages" className={`${styles['nav-link']} mx-2`}><GiEgyptianPyramids style={{fontSize:"30px", marginRight:"7px", marginBottom:"5px"}}/>
           Trips</Link>

           <Link to="/wishlist" className={`${styles['nav-link']} mx-2`}>
            <i aria-hidden="true"></i><GiThink style={{fontSize:"30px", marginRight:"7px", marginBottom:"5px"}}/>

            Things to Do
          </Link>

          
          <Link to="/wishlist" className={`${styles['nav-link']} mx-2`}>
            <i className='fas fa-umbrella-beach' aria-hidden="true"></i> Vacation Rentals
          </Link>

          <Link to="/cart" className={`${styles['nav-link']} mx-2`}>
            <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i> Cart
          </Link>

          <Link to="/wishlist" className={`${styles['nav-link']} mx-2`}>
            <i className="fas fa-heart" aria-hidden="true"></i> Wish List
          </Link>

          <button
          className={styles['coupon-button']}
          
        >Get a Coupon <BiSolidCoupon />
</button>
        </div>

        
        </div>
      
        <div className={styles.container}>
          <div className={styles.login}>
          {!window.localStorage.getItem("sign") ? (
              <div className={styles['login-button']}>
                <Link to="/signup">
                  <Button onClick={handleSignIn}>Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button>Log In</Button>
                </Link>
              </div>
            ) : (
              <NavDropdown
                title={
                  <img
                    src={images}
                    width="50px"
                    height="50px"
                    style={{ borderRadius: '50%' }}
                    alt="Dropdown Icon"
                    className={styles['dropdown-icon']}
                  />
                }
                id="navbarScrollingDropdown"
                className="text-dark"
              >
                <NavDropdown.Item>
                  <Button onClick={handleLogout} variant="outline-primary" className="w-100 text-center">Logout</Button>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/userdashboard" className="text-dark">
                  My Profile
                </NavDropdown.Item>
              </NavDropdown>
            )}
            </div>

            <div className={styles['top-text']}>
              <h1> Explore our <i>Egypt</i></h1>
              <p>Discover the treasures of Egypt, from the ancient pyramids to modern wonders, for an unforgettable journey through history and excitement!</p>
            </div>
            <form id={styles['top-search']} role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Ex: Pyramids of Giza, New Al Alamein ..."
                aria-label="Search"
              />
              <button id={styles['search-button']} type="submit">
                <i ><FaSearch />
                <span > Search</span></i>
              </button>
            </form>
            
          
        </div>
      </div>
    </nav>
  );
}
