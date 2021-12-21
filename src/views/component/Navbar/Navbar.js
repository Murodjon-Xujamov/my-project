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
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { SiTheregister } from "react-icons/si";
import { MdManageSearch, MdShoppingCart } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import Logo from "../../../assets/images/sample-logo-white.png";

const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [fixedNavbarResponse, setFixedNavbarResponse] = useState(false);
  const [acteveLink, setActeveLink] = useState("home");

  const changeScrollNavbar = () => {
    if (window.scrollY >= 202) {
      setFixedNavbar(true);
    } else {
      setFixedNavbar(false);
    }
  };

  window.addEventListener("scroll", changeScrollNavbar);
  const changeScrollNavbarResponse = () => {
    if (window.scrollY >= 50) {
      setFixedNavbarResponse(true);
    } else {
      setFixedNavbarResponse(false);
    }
  };
  window.addEventListener("scroll", changeScrollNavbarResponse);
  return (
    <MNavbar>
      <MContainer>
        <MNavbarCollapse>
          <MNavItem to="/">
            <div className="navbar_response_logo">Logo</div>
          </MNavItem>
          <div className="search_container">
            <input
              type="text"
              placeholder="search"
              className="navbar_response_search"
            />
            <div className="search_icon">
              <MdManageSearch size={25} />
            </div>
          </div>
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
      <MNavbarSelectDropdown
        positionFixed={fixedNavbar}
        positionFixedResponse={fixedNavbarResponse}
      >
        <MContainer>
          <MNavbarSelectContainer>
            <MNavItem to="/" onClick={() => setActeveLink("home")}>
              <AiOutlineHome
                className={`navbar_items_icon ${
                  acteveLink === "home" ? "acteve_link" : ""
                }`}
              />
              <span className="navbar_items_text">Home</span>
            </MNavItem>
            <MNavItem to="/product" onClick={() => setActeveLink("product")}>
              <MdShoppingCart
                className={`navbar_items_icon ${
                  acteveLink === "product" ? "acteve_link" : ""
                }`}
              />
              <span className="navbar_items_text">Mahsulot</span>
            </MNavItem>
            <MNavItem to="/category" onClick={() => setActeveLink("category")}>
              <BiCategoryAlt
                className={`navbar_items_icon ${
                  acteveLink === "category" ? "acteve_link" : ""
                }`}
              />{" "}
              <span className="navbar_items_text">Kategoriya</span>
            </MNavItem>
            <MNavItem to="/category" onClick={() => setActeveLink("user")}>
              <AiFillHeart
                className={`navbar_items_icon ${
                  acteveLink === "user" ? "acteve_link" : ""
                }`}
              />{" "}
              <span className="navbar_items_text">Sevimlilar</span>
            </MNavItem>
            <MNavItem
              to="/product"
              onClick={() => setActeveLink("register")}
              id="dropdown_register_shop"
            >
              <SiTheregister
                className={`navbar_items_icon ${
                  acteveLink === "register" ? "acteve_link" : ""
                }`}
              />{" "}
              <span className="navbar_items_text">Ruyhatdan o'tish</span>
              <div id="dropdown_register">
                <MNavItem to="/">
                  <span className="dropdown_register_text">
                    Ruyhatdan o'tish{" "}
                  </span>
                </MNavItem>
                <MNavItem to="/">
                  <span className="dropdown_register_text">Sozlamalar</span>
                </MNavItem>
                <MNavItem to="/">
                  <span className="dropdown_register_text">Murojat uchun</span>
                </MNavItem>
                <MNavItem to="/">
                  <span className="dropdown_register_text">Admenlar uchun</span>
                </MNavItem>
                <MNavItem to="/">
                  <span className="dropdown_register_text">Chiqish</span>
                </MNavItem>
              </div>
            </MNavItem>
          </MNavbarSelectContainer>
        </MContainer>
      </MNavbarSelectDropdown>
    </MNavbar>
  );
};

export default Navbar;
