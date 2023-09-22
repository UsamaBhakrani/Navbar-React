import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt={logo} />
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
        </div>

        <div
          className={
            isOpen ? "links-container show-container" : "links-container "
          }
        >
          <ul className="links">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((s) => {
            return (
              <li key={s.id}>
                <a href={s.url}>{s.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
