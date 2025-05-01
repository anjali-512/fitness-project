import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import "../App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
function Navbar() {
  return (
    <>
      <div className="main">
        <nav className="navbar navbar-expand-lg fixed-top ">
          <div className="container-fluid navbar-dark bg-dark">
            <Link className="navbar-brand" href="#">
              <img src={Logo} alt="" style={{ height: "70px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Program">
                  Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Trainers">
                  Trainers
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link " to="/Blog">
                  {" "}
                  Blog{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourtrainee">
                  Our Trainee                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourcontact">
                  Our Contact                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/oursession">
                  Our Session                </Link>
              </li>
            </ul>
            <div>
              <SignedOut>
                <SignInButton>
                    <button className="btn btn-primary">Sign in</button>
                   </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
