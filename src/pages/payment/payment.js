import React, { useState, useEffect } from "react";
import Styles from "./payment.module.css";
import PaymentData from "./payment.json";
import BookingData from "./booking.json";
import { MdOutlineFreeCancellation } from "react-icons/md";

function PaymentPage() {
  const [payment, setPayment] = useState(null);
  const [booking, setBooking] = useState(null);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setPayment(PaymentData);
    setBooking(BookingData);

    const totalTravelers =
      (BookingData.Travelers?.Adults || 0) +
      (BookingData.Travelers?.Children || 0) +
      (BookingData.Travelers?.Infants || 0);
    setTotalParticipants(totalTravelers);

    const totalPrice =
      (BookingData.Prices?.CurrentPricePerAdult || 0) +
      (BookingData.Prices?.CurrentPricePerKid || 0) +
      (BookingData.Prices?.CurrentPricePerInfant || 0);
    setTotalPrice(totalPrice);
  }, []);

  const handleSubmit = () => {
    alert("The Payment done Successfully");
  };

  if (!payment || !booking) {
    return <p>Loading...</p>; // عرض رسالة تحميل إذا لم يتم تحميل البيانات بعد
  }

  return (
    <div className={Styles.paymentPage}>
      <div className={Styles.paymentSection}>
        <h3 className={Styles.contactDetailsHeader}>Contact Details</h3>
        <div className={Styles.headerInfo}>
          <span>*</span>
          <p>We'll use this information to confirm and update your booking.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={Styles.nameInfo}>
            <div className={Styles.firstName}>
              <label style={{ display: "block", flexDirection: "column" }}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={payment.FirstName || ''}
                required
              />
            </div>
            <div className={Styles.lastName}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={payment.LastName || ''}
                required
              />
            </div>
          </div>
          <label>Email</label>
          <input type="email" name="email" value={payment.Email || ''} required />
          <label>Phone Number</label>
          <input type="tel" name="phone" value={payment.Phone || ''} required />

          <div className={Styles.couponHeader}>
            <h3>Coupon</h3>
            <h6>(Optionally)</h6>
          </div>
          <input type="text" name="Coupon" value={payment.Coupon || ''} />

          <h3>Payment Details</h3>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={payment.CardNumber || ''}
            required
          />
          <label>Card Expiry</label>
          <input
            type="text"
            name="cardExpiry"
            value={payment.CardExpiry || ''}
            required
          />
          <label>CVV</label>
          <input type="text" name="cardCVV" value={payment.CVV || ''} required />
          <div className={Styles.submitBtn}>
            <button type="submit" className={Styles.payBtn}>
              Complete Payment
            </button>
          </div>
        </form>
      </div>

      <div className={Styles.bookingReview}>
        <h3>Booking Details</h3>

        <div className={Styles.tourBookingDetails}>
          <h3>{booking.tourOverview || 'No Overview'}</h3>
          <img src={booking.tourImg || ''} alt="Tour" />
        </div>

        <p>
          By <a href="#">EGYPTIA ANTIQUA</a>
        </p>
        <div className={Styles.border}></div>

        <div className={Styles.bookingWordSpace}>
          <p>Date</p>
          <h4>{booking.Date || 'N/A'}</h4>
        </div>

        <div className={Styles.bookingWordSpace}>
          <p>Time</p>
          <h4>{booking.Time || 'N/A'}</h4>
        </div>

        <div className={Styles.bookingWordSpace}>
          <p>Location</p>
          <h4>{booking.Location || 'N/A'}</h4>
        </div>

        <div className={Styles.bookingWordSpace}>
          <p>Travelers</p>
          <h4>{totalParticipants}</h4>
        </div>
        <div className={Styles.cancellation}>
          <p>
            <MdOutlineFreeCancellation />
            <span>Free cancellation before {booking.Cancellation || 'N/A'}</span>
          </p>
        </div>

        <div className={Styles.border}></div>

        <div className={Styles.bookingPricesDetails}>
          <p>
            Price <span>per Adult</span>
          </p>
          <h4>${booking.Prices?.CurrentPricePerAdult || 0}</h4>
        </div>

        <div className={Styles.bookingPricesDetails}>
          <p>
            Price <span>per Kid</span>
          </p>
          <h4>${booking.Prices?.CurrentPricePerKid || 0}</h4>
        </div>

        <div className={Styles.bookingPricesDetails}>
          <p>
            Price <span>per Infant</span>
          </p>
          <h4>${booking.Prices?.CurrentPricePerInfant || 0}</h4>
        </div>

        <div className={Styles.totalPrice}>
          <p>
            Total: <span>${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
