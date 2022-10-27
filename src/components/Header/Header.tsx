import "./header.scss";
import logo from "../../assets/logos/rocam-logo.svg";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faClose,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import calendarUser from "../../assets/icons/perm_contact_calendar.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const navigationLinks = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "about",
      route: "/about",
    },
    {
      name: "news",
      route: "/news",
    },
  ];

  const handleToggler = () => {
    setShowMenu(!showMenu);
  };

  const renderNavLink = (name: string, route: string) => (
    <Link
      className={`nav-link ${pathname === route ? "active" : ""}`}
      to={route}
    >
      {name}
    </Link>
  );

  return (
    <header className="app-header">
      <div className="con">
        <img src={logo} alt="ROCAM logo" className="logo" />
        <nav className={`${showMenu ? "" : "hide"}`}>
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>{renderNavLink(link.name, link.route)}</li>
            ))}
            <li>
              <Link to="/schools">
                <CustomButton
                  text="Schools Involved"
                  icon={<FontAwesomeIcon icon={faGraduationCap} />}
                  skin="secondary"
                  type="button"
                />
              </Link>
            </li>
            <li>
              <CustomButton
                text="Schools Involved"
                icon={calendarUser}
                skin="primary"
                type="button"
              />
            </li>
          </ul>
        </nav>
        <div onClick={handleToggler} className="nav-toggler">
          {!showMenu && <FontAwesomeIcon className="bars" icon={faBars} />}
          {showMenu && <FontAwesomeIcon className="close" icon={faClose} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
