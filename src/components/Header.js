// Header NavBar
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import logo from "../Assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const userStatus = useUserStatus();
  const { loggedInUser } = useContext(UserContext);

  // Selectort
  const cart = useSelector((store)=> store.cart.items);

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu-item">
          <ul>
            <li className="mx-3">{userStatus === true ? "🟢" : "🔴"}</li>
            <Link to="/">
              <li className="mx-3">Home</li>
            </Link>
            <Link to="/about">
              <li className="mx-3">About</li>
            </Link>
            <Link to="/contact">
              <li className="mx-3">Contact</li>
            </Link>
            <li>{loggedInUser}</li>
          </ul>
        </div>

        <div><Link to='/cart'>Cart ({cart.length} Items)</Link></div>
      </div>
    </>
  );
};

export default Header;
