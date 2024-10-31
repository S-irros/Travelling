import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./context";
import styles from "./login.module.css";
import groundVideo from "./media/Momiaa.mp4";
import { IoIosArrowBack } from "react-icons/io";

export default function Login() {
  const { value, setValue } = useContext(MyContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    if (email && password) {
      fetch("http://localhost:3000/author")
        .then((response) => response.json())
        .then((data) => {
          const user = data.find(
            (element) =>
              element.email === email && element.password === password
          );
          setShow(user);
        })
        .catch((error) => console.error("Fetch error:", error));
    }
  }, [email, password]);

  function handleSubmit(e) {
    e.preventDefault();
    setAccept(true);

    if (password.length >= 8 && show) {
      window.localStorage.setItem("sign", true);
      window.localStorage.setItem("user", JSON.stringify(show));

      setValue(show);

      navigate("/");
    } else {
      alert("Failed to log in. Please check your email or password.");
    }
  }

  return (
    <div className="background">
      <video
        className={styles.login_Video}
        src={groundVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className={styles.login_page}>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <div className={styles.back_btn}>
            <label className={styles.back} onClick={() => navigate("/")}>
              <i>
                <IoIosArrowBack />
              </i>{" "}
              Back
            </label>
          </div>
          <h1>
            Login to Enjoy with us over +200 trips around{" "}
            <i className={styles.egypt}>Egypt</i>
          </h1>
          <input
            type="email"
            className="ff"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            type="password"
            className="ff"
            id="pass"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />
          {password.length < 8 && accept && (
            <p>Password must be greater than 8 characters</p>
          )}

          <button type="submit" className="ff">
            Login
          </button>
          <div className={styles.forget_Password}>
            <a href="/forget">Forget password ?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
