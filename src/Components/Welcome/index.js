import React from "react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";

function Welcome() {
  return (
    <div class ="">
      <h1>Cocktail Dreamer</h1>
      <div>
                <h3>Welcome to Cocktail Dreamer, Login to get started.</h3>
                <Login />
                <Signup />
              </div>
            </div>
       
  );
}
export default Welcome;