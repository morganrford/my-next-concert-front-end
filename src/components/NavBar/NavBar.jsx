import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Clear the user state
    setUser(null);
  };

return (
<nav className="navbar">
  {/* Left side */}
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/concerts/new">New Concert</Link></li>
    <li><Link to="/band/new">New Band</Link></li>
    <li><Link to="/concerts">Your Concerts</Link></li>
    <li><Link to="/bands">Your Bands</Link></li>
  </ul>

  {/* Center title */}
  <div className="nav-title">
    <img src="../src/assets/mnclogo.png" alt="My Next Concert" className="logo" />
  </div>

  {/* Right side */}
  <ul className="nav-user">
    {user ? (
      <>
        <li>Welcome, {user.username}</li>
        <li><Link to="/" onClick={handleSignOut}>Sign Out</Link></li>
      </>
    ) : (
      <>
        <li><Link to="/sign-in">Sign In</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
      </>
    )}
  </ul>
</nav>
);
};

export default NavBar;
