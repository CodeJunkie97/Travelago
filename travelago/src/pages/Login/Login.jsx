import "./login.css"
import axios from "axios";
import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import {Link} from "react-router-dom";


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
  <div>
    <Navbar />
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
       
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
      
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
    <div className = "footContainer">
    <div>
    <hr />
    <p className="p1">
          By signing in or creating an account, you agree with our{" "}
          <span style={{ color: "blue" }}>Terms & Conditions</span> and{" "}
          <span style={{ color: "blue" }}>Privacy Statement</span>
    </p>
    <hr />
    </div>
    <div className="footContainer">
        <p className="p1"> All rights reserved.</p>
        <p className="p1">Copyright (2006-2021) – Travelago.com™</p>
    </div>
    </div>
    </div>
  );
  };
  
  export default Login;
