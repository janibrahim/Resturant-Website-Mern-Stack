import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll"; // for same-page scrolling
import { Link as RouterLink } from "react-router-dom"; // for page navigation
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">Ibrahii</div>

        <div className={show ? "navLinks showmenu" : "navLinks"}>
          {/* -------- SCROLL LINKS -------- */}
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <ScrollLink
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>

          {/* -------- ROUTER LINKS -------- */}
          <div className="loginSignup">
            <RouterLink to="/menuPage">
              <button className="menuBtn mr-3">OUR MENU</button>
            </RouterLink>

            <RouterLink to="/login">
              <button className="menuBtn bg-black text-white hover:bg-gray-800 transition">
                Login / SignUp
              </button>
            </RouterLink>
          </div>
        </div>

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
