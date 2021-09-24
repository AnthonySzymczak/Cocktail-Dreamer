import React from "react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import "./Welcome.css";
import coverImage from "../../images/Bar.jpg"
function Welcome() {
  return (
    <div className="Welcome1"  >
      <h1>Cocktail Dreamer</h1>
      <div className="Welcome2">
        <h3>Welcome to Cocktail Dreamer, Login to get started.</h3>
        <Login />
        <Signup />
      </div>
      <img src={coverImage} className="my-2" style={{ width: "60%" }} alt="cover" />
    </div>
  );
}
export default Welcome;