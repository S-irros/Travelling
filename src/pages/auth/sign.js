import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './signup.module.css';
import videoFile from './media/riding moto.mp4';
import { IoIosArrowBack } from "react-icons/io";
import backImage from './media/new.jpg'


export default function Sign() {
    const navigate = useNavigate();
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [accept, setaccept] = useState(false);
    
    function handleFirstNameChange(e) {
        setFirstname(e.target.value);
    }
    function handleLastNameChange(e) {
        setLastname(e.target.value);
    }
    function handleEmailChange(e) {
        setemail(e.target.value);
    }
    function handleAddressChange(e) {
        setaddress(e.target.value);
    }
    function handlePhoneChange(e) {
        setphone(e.target.value);
    }
    function handlePasswordChange(e) {
        setpassword(e.target.value);
    }
    function handleCpasswordChange(e) {
        setcpassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setaccept(true);
        if (firstName === "" || lastName === "" || address === "" || phone === "" || password.length < 8 || password !== cpassword || email === "") {
            return false;
        }
        const person =  email.toLowerCase().includes("@admin") ? "admin" : "user";
         axios.post("http://localhost:3000/author", {
                firstName,
                lastName,
                email,
                address,
                phone,
                password,
                person
            })
            .then(response => {
                console.log(response);
                navigate("/login");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    
    }

    useEffect(() => {
        document.body.style.backgroundImage = `url(${backImage})`;
        document.body.style.backgroundSize = "cover";
    
        return () => {
          document.body.style.background = "";
        };
      }, []);

    return (
        <div className={styles.SignUpContainer}>
        <div className={styles.SignPage}>
            <div className={styles.welcome}>
                <div className={styles.back_btn}>
            <label className={styles.back} onClick={() => navigate("/")}><i><IoIosArrowBack />
            </i> Back</label>
            </div>
                <h1>Experience the Wonders of <i>Egypt's</i> Ancient Civilization !</h1>
            <p>Dive into a world of magic and wonder where the richness of history meets the beauty of nature. Egypt is not just a tourist destination; it's a story that spans centuries, from the towering Pyramids of Giza that defy time to the mysterious temples of Luxor that narrate the tales of the pharaohs. Marvel at the ancient architectural wonders and admire the intricate hieroglyphics that tell the legends of our ancestors.</p>
            <p>Wander through the vibrant markets of Cairo, where you can indulge in shopping and savor the delicious local cuisine. Sign up now to unlock exclusive experiences and explore the treasures of Egypt like never before!</p>
            </div>
        <div className={styles.main}>
            <div className={styles.all_in}>

            <div className={styles.heading}>
                <h3>Sign up to Explore Exciting Tours</h3>
            </div>
                
                <form className={styles.signin_frm} onSubmit={handleSubmit}>
                
                    <div className={styles.inputs}>

                    <div className={styles.names}>
                    <input
                        type="text"
                        value={firstName}
                        id="firstName"
                        onChange={handleFirstNameChange}
                        placeholder='First Name'
                    />
                    
                    {accept && firstName === "" && <p className={styles.error}>First Name is required</p>}

                    <input
                        type="text"
                        value={lastName}
                        id="lastName"
                        onChange={handleLastNameChange}
                        placeholder='Last Name'
                    />
                    
                    {accept && lastName === "" && <p className={styles.error}>Last Name is required</p>}

                    </div>
                    <input
                        type="email"
                        value={email}
                        id="email"
                        onChange={handleEmailChange}
                        placeholder='Email'
                    />
                    
                    {accept && email === "" && <p className={styles.error}>Email is required</p>}

                    <input
                        type="address"
                        value={address}
                        id="address"
                        onChange={handleAddressChange}
                        placeholder='Address'
                    />
                    
                    {accept && address === "" && <p className={styles.error}>Address is required</p>}

                    <input
                        type="phone"
                        value={phone}
                        id="phone"
                        onChange={handlePhoneChange}
                        placeholder='Phone'
                    />
                    
                    {accept && phone === "" && <p className={styles.error}>Phone is required</p>}
                    <input
                        type="password"
                        value={password}
                        id="pass"
                        onChange={handlePasswordChange}
                        placeholder='Password'
                    />
                    
                    {accept && password.length < 8 && (
                        <p className={styles.error}>Password must be at least 8 characters</p>
                    )}

                    <input
                        type="password"
                        value={cpassword}
                        id="confirmPass"
                        onChange={handleCpasswordChange}
                        placeholder='Re-enter password'
                    />
                    
                    {accept && cpassword !== password && (
                        <p className={styles.error}>Passwords do not match</p>
                    )}

                    <button type="submit" value="Register"> Sign up </button>

                    </div>

                    <div className={styles.bottomm}>
                    <div className={styles.separator}>
                        <hr />
                        <div className={styles.or}>
                            <h2>Or</h2>
                            <p>log in with</p>
                        </div>
                        <hr />
                    </div>
            
                    <div className={styles.icons}>
                        <a id="FB" href="#facebook account"><i className="fa-brands fa-facebook"></i></a>
                        <a id="GG" href="#google account"><i className="fa-brands fa-google"></i></a>
                        <a id="APL" href="#apple account"><i className="fa-brands fa-apple"></i></a>
                    </div>

                    <div className={styles.loginAbs}>
                        <p>Already have an account ? <a href="/login">Log in</a></p>
                    </div>

                </div>
                </form>

                
            </div>
            <div className={styles.bkground}>
            
        <p className={styles.p1}>Discover Egypt !</p>
      
        {/* <p className={styles.p2}>Experience the Land of the Pharaohs – Your Adventure Awaits!</p> */}
      
                <video src={videoFile} autoPlay muted loop></video>
            </div>
        </div>
        </div>
        </div>
    );
}
