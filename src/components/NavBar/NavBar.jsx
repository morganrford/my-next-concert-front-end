import { Link } from "react-router";

const NavBar = ({ user }) => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className="navbar">
      {user && (
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/concerts/new">New Concert</Link>
          </li>
          <li>
            <Link to="/band/new">New Band</Link>
          </li>
          <li>
            <Link to="/concerts">Your Concerts</Link>
          </li>
          <li>
            <Link to="/bands">Your Bands</Link>
          </li>
        </ul>
      )}
      <div className="nav-title">
        <img
          src="../src/assets/mnclogo.png"
          alt="My Next Concert"
          className="logo"
        />
      </div>
      <ul className="nav-user">
        {user ? (
          <>
            <li>Welcome, {user.username}</li>
            <li>
              <Link to="/" onClick={handleSignOut}>
                Sign Out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
