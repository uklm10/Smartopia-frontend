import React from "react";
import "./Left.css";
import { useSelector } from "react-redux";

function Leftpart() {

    const UserInfo=useSelector((state)=>state.user)

  return (
    <div>
      <div>
        <img
          className="profimg"
          src="https://wallpapers.com/images/hd/cool-girl-cartoon-blonde-hair-1r49fjkwcv37ihjf.jpg"
        />
      </div>

      <div>
        <h3>Nmae : {UserInfo.user.fname} {UserInfo.user.lname} </h3>
        <h3>Email: <span>{UserInfo.user.email} </span></h3>
      </div>

      <div>
        <h3>Likes:2.5k</h3>
        <h3>Saved :5</h3>
      </div>
      <div>
        <label>Edit password</label>
        <input type="password" placeholder="***********" value="pass"></input>
      </div>
      <div>
        <button className="btn">Show Likes</button>
        <button className="btn">Show Saved</button>
      </div>
    </div>
  );
}
export default Leftpart;
