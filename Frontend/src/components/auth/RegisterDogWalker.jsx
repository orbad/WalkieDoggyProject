import React, { useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signup from "./dist/images/sign_up.png";
import { Link } from "react-router-dom";
import axios from "axios";
import GoogleAutocomplete from "react-google-autocomplete";



const RegisterDogWalker = () => {
   // State to store the user parameters
   const [phone, setPhone] = useState("");
   const [isValid, setIsValid] = useState(true);
   const [userEmail, setUserEmail] = useState("");
   const [userName, setUserName] = useState("");
   const [userLastName, setUserLastName] = useState("");
   const [password, setPassword] = useState("");
   const [address, setAddress] = useState("");
   const [country, setCountry] = useState("");
   const [city, setCity] = useState("");
   const [zip, setZip] = useState("");
 

  const handleAddressSelect = (address) => {
    setAddress(address);
  };
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    let formattedValue = inputValue.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    if (formattedValue.length > 10) {
      formattedValue = formattedValue.slice(0, 10); // Truncate to 10 digits
    }

    if (formattedValue.length > 3) {
      formattedValue = formattedValue.replace(/^(\d{3})(\d{0,7})/, "$1-$2");
    }

    setPhone(formattedValue);
  };

  const postData = async () => {
    const url =
      "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register"; // Replace with your actual API endpoint URL

    // Use the captured input values as needed
    const requestData = {
      user_email: userEmail,
      address: address,
      city: city,
      country: country,
      password: password,
      phone_number: phone,
      user_last_name: userLastName,
      user_name: userName,
      zip: zip,
    };

    const userRole = "walker";
    const params = new URLSearchParams({ user_role: userRole });

    axios
      .post(`${url}?${params}`, JSON.stringify(requestData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <div className="wrapper">
      <div className="main">
        {/* Sign up form */}
        <section className="signup">
          <div className={styles.container}>
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">
                  {" "}
                  Sign Up <br />
                  as a Dog Walker
                </h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  {/* User name */}
                  <div className="form-group">
                    <label htmlFor="user_name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="User name"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  {/* Last name */}
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="user_last_name"
                      placeholder="Your last name"
                      required
                      value={userLastName}
                      onChange={(e) => setUserLastName(e.target.value)}
                    />
                  </div>
                  {/* user_email */}
                  <div className="form-group">
                    <label htmlFor="user_email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="user_email"
                      name="user_email"
                      id="user_email"
                      placeholder="Your Email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  {/* password */}
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* Address */}
                  <div className="form-group">
                    <label htmlFor="Address">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <GoogleAutocomplete
                      apiKey="AIzaSyDsq09ATa2cc1TlmbLQrqJSwaFpyblnJAI"
                      selectProps={{
                        value: address,
                        onChange: handleAddressSelect,
                        placeholder: "Address",
                        required: true,
                        value: {address},
                        onChange: handleAddressSelect,
                      }}
                    />
                  </div>
                  {/* phone number*/}
                  <div className="form-group">
                    <label htmlFor="phone_number">
                      <i className="zmdi zmdi-phone" />
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Phone number"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  {/* country */}
                  <div className="form-group">
                    <label htmlFor="Country">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="Country"
                      id="Country"
                      placeholder="Country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  {/* City */}
                  <div className="form-group">
                    <label htmlFor="City">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="City"
                      id="City"
                      placeholder="City"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  {/* Zip*/}
                  <div className="form-group">
                    <label htmlFor="zip">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      placeholder="Zip code"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      I agree all statements in Terms of service
                      {/* <a href="#" className="term-service">
                     
                    </a> */}
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <Link to="/WalkerProfile">
                      <input
                        type="submit"
                        name="signup"
                        id="signup"
                        className="form-submit"
                        defaultValue="Register"
                        onClick={postData}
                      />
                    </Link>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={signup} alt="sing up image" />
                </figure>
                <button
                  className="signup-image-link button-54"
                  onClick={() => {
                    window.location.href = "/LoginDogOwner";
                  }}
                >
                  I am already a member
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Sing in  Form */}
      </div>
    </div>
  );
};

export default RegisterDogWalker;
