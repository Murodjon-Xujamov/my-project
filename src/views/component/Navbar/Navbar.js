import React, { useState } from "react";
import {
  MContainer,
  MHeader,
  MHeaderInfo,
  MNavbar,
  MNavbarCollapse,
  MNavbarSelectDropdown,
  MNavItem,
  MNavbarSelectContainer,
} from "../../element/Container";
import "../../../assets/scss/_navbar.scss";
import { FiPhoneCall } from "react-icons/fi";
import { FaHouseUser } from "react-icons/fa";
import { GiCrystalBars } from "react-icons/gi";
import { SiTheregister } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import Logo from "../../../assets/images/sample-logo-white.png";

const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const changeScrollNavbar = () => {
    if (window.scrollY >= 202) {
      setFixedNavbar(true);
    } else {
      setFixedNavbar(false);
    }
  };
  window.addEventListener("scroll", changeScrollNavbar);
  return (
    <MNavbar>
      <MContainer>
        <MNavbarCollapse>
          <select className="language_select">
            <option>UZB</option>
            <option>RUS</option>
          </select>
        </MNavbarCollapse>
      </MContainer>
      <MHeader>
        <MContainer>
          <MHeaderInfo>
            <MNavItem to="/">
              <img src={Logo} alt="Logo" />
            </MNavItem>
            <div>
              <span className="store_region_no_plece">
                <h4>O'zbekiston buylab yetqazib berish mutloqo bepul</h4>
                <h1>Hammasi orzulardan boshlanadi!</h1>
              </span>
            </div>
            <div className="call_center_phone_number">
              <FiPhoneCall className="call_center_icon" /> +99891-641-11-13
            </div>
          </MHeaderInfo>
        </MContainer>
      </MHeader>
      <MNavbarSelectDropdown className={fixedNavbar ? "active_fixed" : ""}>
        <MContainer>
          <MNavbarSelectContainer>
            <MNavItem to="/product">
              <GiCrystalBars className="navbar_items_icon" /> Kategoryalar
            </MNavItem>
            <MNavItem to="/product">
              <MdProductionQuantityLimits className="navbar_items_icon" />
              Mahsulot
            </MNavItem>
            <MNavItem to="/product">
              <DiAptana className="navbar_items_icon" /> Sozlamalar
            </MNavItem>
            <MNavItem to="/product">
              <FaHouseUser className="navbar_items_icon" /> Foydalunuvchi
            </MNavItem>
            <MNavItem to="/product">
              <SiTheregister className="navbar_items_icon" /> Ruyhatdan o'tish
            </MNavItem>
          </MNavbarSelectContainer>
        </MContainer>
      </MNavbarSelectDropdown>
    </MNavbar>
  );
};

export default Navbar;
