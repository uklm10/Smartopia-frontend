import React from "react";
import "./Profile.css";
import Leftpart from "../../Components/Profile/Left_Part/Left";
import Right from "../../Components/Profile/Right_Part/Right";

function Profile() {
  return (
    <div>
      <div className="left-div">
       <Leftpart /> 
      </div>

      <div className="right-div">
        <Right />
      </div>
    </div>
  );
}

export default Profile;
