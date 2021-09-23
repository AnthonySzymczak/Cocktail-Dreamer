import React from "react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import "./Welcome.css";

function Welcome() {
  return (
    <div class="Welcome1">
      <h1>Cocktail Dreamer</h1>
      <div class="Welcome2">
        <h3>Welcome to Cocktail Dreamer, Login to get started.</h3>
        <Login />
        <Signup />
      </div>
    </div>
  );
}
export default Welcome;