import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Booking from "./Booking";
import tourData from "./tour.json";
import bookingData from "./booking.json";
import Styles from "./packages.module.css";
import { FaClock } from 'react-icons/fa';
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { BsPersonWalking } from "react-icons/bs";
import { GiWavyItinerary } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaSquareMinus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";

function App() {
  const [tour, setTour] = useState(null);
  const [booking, setBooking] = useState(null);
  const currentDate = new Date().toISOString().slice(0, 10);
  const [showDateInput, setShowDateInput] = useState(false);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [infants, setInfants] = useState(0);
  const [totalTravelers, setTotalTravelers] = useState(adults + kids + infants);
  const travelersRef = useRef(null);
  const navigate = useNavigate();


  const handleAdultsChange = (increment) => {
    setAdults((prevAdults) => {
      const newAdults = increment ? prevAdults + 1 : prevAdults - 1;
      return newAdults >= 0 ? newAdults : 0;
    });
  };

  const handleKidsChange = (increment) => {
    setKids((prevKids) => {
      const newKids = increment ? prevKids + 1 : prevKids - 1;
      return newKids >= 0 ? newKids : 0;
    });
  };

  const handleInfantsChange = (increment) => {
    setInfants((prevInfants) => {
      const newInfants = increment ? prevInfants + 1 : prevInfants - 1;
      return newInfants >= 0 ? newInfants : 0;
    });
  };

  const handleUpdateTravelers = () => {
    const total = adults + kids + infants;
    setTotalTravelers(total);
    setShowDateInput(false);
  };

  useEffect(() => {
    setTour(tourData);
    setBooking(bookingData);
    if (bookingData?.Participants) {
      setAdults(bookingData.Participants.Adults);
      setKids(bookingData.Participants.Children);
      setInfants(bookingData.Participants.Infants);
      
      setTotalTravelers(
        bookingData.Participants.Adults +
        bookingData.Participants.Children +
        bookingData.Participants.Infants
      );
    }
  }, []);

  return (
    <div className={Styles.tour_details}>
      <h1>{tour?.tourName}</h1>
      <h6 id="offer">Special Offer</h6>
      <p className={Styles.overview}>{tour?.overview}</p>
      <h4 style={{ fontSize: "18px" }}>
        Category:{" "}
        <a href="#" className={Styles.category}>
          {tour?.category}
        </a>
      </h4>

      <div className={Styles.gallery}>
        <div className={Styles.coverPhoto}><img src={tour?.coverPhoto} alt="Cover" /></div>
        <div className={Styles.otherPhotos}>
          {tour?.gallery?.map((photo, index) => (
            <img key={index} src={photo} alt={`Gallery ${index}`} />
          ))}
        </div>
      </div>

      <div className={Styles.about}>
        <p><strong className={Styles.disc}>Description:</strong></p>
        <p className={Styles.discription}>{tour?.description}</p>
        <p className={Styles.ages}><MdFamilyRestroom /><strong>Ages:</strong> {tour?.ages}</p>
        <p className={Styles.duration}><FaClockRotateLeft /><strong>Duration:</strong> {tour?.duration}</p>
        <p className={Styles.guide}><BsPersonWalking /><strong>Live Guide:</strong> {tour?.live_guide}</p>
        <p><GiWavyItinerary /><strong>Itinerary:</strong> {tour?.itinerary}</p>
        <p><MdOutlinePriceChange /><strong>Price</strong> per Adult: {tour?.oldpriceForAdult}$</p>
        <p><MdOutlinePriceChange /><strong>Price</strong> per Kid: {tour?.oldpriceForKids}$</p>
        <p><MdOutlineDiscount /><strong>Discount:</strong> {tour?.discount}</p>
      </div>

      <div className={Styles.booking}>
        <div className={Styles.AdPrice}>
          <h1>From <i className={Styles.oldpriceAd}>{tour?.oldpriceForAdult}$</i> <i className={Styles.newpriceAd}>{tour?.newpriceForAdult}$</i></h1>
          <p>per adult</p>
        </div>

        <div className={Styles.date}>
          <h4>Select date and participants</h4>
          <div className={Styles.travelers_input}>
            <input
              type="date"
              name="date"
              defaultValue={booking?.Date}
              onChange={(e) => console.log(e.target.value)}
            />
            <button onClick={() => setShowDateInput(!showDateInput)} className={Styles.participantsbtn}>
              <IoPeopleSharp /> <span>{totalTravelers}</span>
            </button>

            {showDateInput && (
              <div className={Styles.participants} ref={travelersRef} onClick={(e) => e.stopPropagation()}>
                <div className={Styles.travelers_header}>
                  <h2 style={{ textAlign: "center" }}>Travelers</h2>
                </div>
                <div className={Styles.travelers_body}>
                  <div className={Styles.travelers_row}>
                    <label style={{fontWeight: "bold"}}>Adults <span style={{fontWeight:"lighter", fontSize: "12px"}}>Ages {booking?.Ages?.Adult}</span></label>
                    <div className={Styles.btns} style={{ display: 'flex', alignItems: 'center' }}>
                      <button onClick={() => handleAdultsChange(false)} disabled={adults === 0} className={adults === 0 ? Styles.disabledButton : ""}>
                        <FaSquareMinus className={Styles.MinusBTN}/>
                      </button>
                      <span className={Styles.Dynanum} style={{marginLeft: "10px", marginRight: "10px"}}>{adults}</span>
                      <button onClick={() => handleAdultsChange(true)}><FaSquarePlus className={Styles.PlusBTN}/></button>
                    </div>
                    <span className={Styles.bottomPrice}>${tour?.newpriceForAdult}</span>
                  </div>
                  <div className={Styles.travelers_row}>
                    <label style={{fontWeight: "bold"}}>Kids <span style={{fontWeight:"lighter", fontSize: "12px"}}>Ages {booking?.Ages?.Kid}</span></label>
                    <div className={Styles.btns} style={{ display: 'flex', alignItems: 'center' }}>
                      <button onClick={() => handleKidsChange(false)} disabled={kids === 0} className={kids === 0 ? Styles.disabledButton : ""}>
                        <FaSquareMinus className={Styles.MinusBTN}/>
                      </button>
                      <span className={Styles.Dynanum} style={{marginLeft: "10px", marginRight: "10px", fontFamily: "verdana"}}>{kids}</span>
                      <button onClick={() => handleKidsChange(true)}><FaSquarePlus className={Styles.PlusBTN}/></button>
                    </div>
                    <span className={Styles.bottomPrice}>${tour?.oldpriceForKids}</span>
                  </div>
                  <div className={Styles.travelers_row}>
                    <label style={{fontWeight: "bold"}}>Infants <span style={{fontWeight:"lighter", fontSize: "12px"}}>Ages {booking?.Ages?.Infant}</span></label>
                    <div className={Styles.btns} style={{ display: 'flex', alignItems: 'center' }}>
                      <button onClick={() => handleInfantsChange(false)} disabled={infants === 0} className={infants === 0 ? Styles.disabledButton : ""}>
                        <FaSquareMinus className={Styles.MinusBTN}/>
                      </button>
                      <span className={Styles.Dynanum} style={{marginLeft: "10px", marginRight: "10px", fontFamily: "verdana"}}>{infants}</span>
                      <button onClick={() => handleInfantsChange(true)}><FaSquarePlus className={Styles.PlusBTN}/></button>
                    </div>
                    <span className={Styles.bottomPrice}>Free</span>
                  </div>
                  <button className={Styles.UpdateTravelersBtn} onClick={handleUpdateTravelers}>Update Travelers</button>
                </div>
              </div>
            )}
          </div>
          <button className={Styles.bookbtn} onClick={() => navigate('/payment')}>Book Now</button>
        </div>
      </div>

      <div className={Styles.reviewSection}>
        {tour?.reviews?.map((review, index) => (
          <div key={index}>
            <h4>{review.name}</h4>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
