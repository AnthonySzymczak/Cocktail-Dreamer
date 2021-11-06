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
      <img src={coverImage} className="my-2 w-full h-full bg-left bg-cover bg-fixed" alt="cover" />
        <Signup />
      </div>
      {/* <div class="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed" style="background-image: url('src\images\Bar.jpg')"> */}
      {/* </div> */}
    </div>
  );
}
export default Welcome;