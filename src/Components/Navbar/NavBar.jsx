import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import HomeIcon from '@mui/icons-material/Home';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import ArticleIcon from '@mui/icons-material/Article';
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
// import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
// import FolderIcon from '@mui/icons-material/Folder';
// import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
// import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { userAction } from "../../Redux/userSlice";

function NavBar({ style }) {
  const UserInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(UserInfo);

  function logoutHandler() {
    dispatch(userAction.logoutUser());
    navigate("/");
  }
  return (
    <div className="row m-0">
      <nav style={style} className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src="../../../images/logo.png" alt="logo" />
          </div>
          <div className="nav-link-container">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/glossary">
              <span>Glossary</span>
            </Link>
            <Link to="/learn">
              <span>Learn</span>
            </Link>
            <Link to="/submit">
              <span>Submit</span>
            </Link>

            {UserInfo.userLogedIn ? (
              <div>
                <Link to="/profile" className="link-login">
                  Profile
                </Link>
                <button onclick={logoutHandler} className="link-login">
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login" className="link-login">
                  Login
                </Link>
                <Link to="/register" className="link-login">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
