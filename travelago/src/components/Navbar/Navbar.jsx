import './navbar.css';
import {Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Travelago</span>
        </Link>
        {user ? (<div> {user.username} <button className = "logout" onClick = {handleLogout}>Logout</button></div>): (
          <div className="navItems">
           <Link to = "/registration"> <button className="navButton">Register</button></Link>
            <Link to="/login"><button className="navButton" >Login</button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
