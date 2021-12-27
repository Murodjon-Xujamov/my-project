import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLOR } from "./Variables";
import Clock from "../../assets/images/clock.jfif";

export const MContainer = styled("div")`
  max-width: 90%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    max-width: 96%;
  }
`;

export const MNavbar = styled("nav")`
  background-color: ${COLOR.Green};
`;

export const MNavbarCollapse = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const MNavItem = styled(NavLink)`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
`;

export const MHeader = styled("header")`
  color: white;
  background: ${COLOR.GreenGradient};
  height: 150px;
  @media only screen and (max-width: 568px) {
    display: none;
  }
`;

export const MHeaderInfo = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 568px) {
    justify-content: center;
  }
`;

export const MNavbarSelectDropdown = styled("div")`
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  top: 0;
  right: 0;
  left: 0;
  background-color: #0b7909;
  z-index: 10;
  @media only screen and (min-width: 568px) {
    position: ${(props) => (props.positionFixed ? "fixed" : "")};
  }
  @media only screen and (max-width: 568px) {
    position: ${(props) => (props.positionFixedResponse ? "fixed" : "")};
  }
`;

export const MNavbarSelectContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const MInformationsContainer = styled("div")`
  border-top: 4px solid ${COLOR.Green};
  margin: 30px 0;
  @media only screen and (max-width: 568px) {
    margin: 10px 0;
  }
`;

export const MInformationsContainerOne = styled("div")``;

export const MInformations = styled("div")`
  background: ${COLOR.Green};
  padding: 3px 30px 7px 30px;
  width: max-content;
  font-size: 18px;
  color: white;
  @media only screen and (max-width: 568px) {
    font-size: 15px;
  }
`;

export const MGridFour = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 10px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 728px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 568px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

export const MGridThree = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 568px) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
`;

export const MGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 568px) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
`;

export const MProductCard = styled("div")`
  background: #fff;
  box-shadow: 2px 2px 6px rgb(0 0 0 / 30%);
  margin-bottom: 0.5rem;
  border-radius: 6px;
  position: relative;
`;

export const MProductPriceGalery = styled("div")`
  background: #fff;
  padding: 5px 10px;
  position: absolute;
  z-index: 999px;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  font-size: 15px;
`;
export const MProductCardImage = styled("div")`
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;
export const MImg = styled("img")`
  width: 100%;
  object-fit: cover;
`;
export const MProductCardBody = styled("div")`
  padding: 10px;
`;
export const MProductTitle = styled("div")`
  font-size: 18px;
`;
export const MProductPrice = styled("div")`
  font-size: 14px;
  font-weight: 700;
  margin: 10px 0;
`;
export const MProductIcons = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MRow = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MHeaderResponse = styled("div")``;
export const MHomeHeaderPage = styled("div")`
  width: 100%;
  height: 90vh;
  background-image: url(${Clock});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 568px) {
    padding-top: ${(props) => (props.paddingTop ? "60px" : "")};
  }
  @media only screen and (max-width: 568px) {
    display: none;
  }
`;
export const MHomeHeaderImage = styled("div")`
  width: 100%;
  height: 90vh;
  background-image: url(${Clock});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MHomePage = styled("div")`
  width: 100%;
  height: 90vh;
  background: linear-gradient(
    130deg,
    rgba(11, 121, 9, 1) 40%,
    rgba(255, 255, 255, 0.1) 100%
  );
`;
export const MFooter = styled("div")`
  width: 100%;
  background-image: url(${Clock});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 50px;
  @media only screen and (max-width: 568px) {
    margin-top: 30px;
  }
`;
export const MFooterColor = styled("div")`
  width: 100%;
  background-image: url(${Clock});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const MHomeFooter = styled("div")`
  width: 100%;
  background: rgba(11, 121, 9, 0.8);
`;
export const MFooterTitle = styled("h1")`
  font-size: 100px;
  color: white;
  font-family: cursive;
  font-style: italic;
  font-variant: petite-caps;
  margin: 30px 0;
  @media only screen and (max-width: 568px) {
    font-size: 40px;
    margin: 12px 0;
  }
`;
export const MFooterText = styled("h5")`
  color: #e7e3e8;
  font-size: 18px;
  margin: 10px 0;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: white;
  }

  @media only screen and (max-width: 568px) {
    font-size: 15px;
    margin: 6px 0;
  }
`;
export const MFooterBottom = styled("h5")`
  color: white;
  font-size: 15px;
  margin: 30px 0 0 0;
  text-align: center;
  padding-bottom: 15px;
`;
export const MCardCategory = styled("div")`
  box-shadow: 2px 2px 6px rgb(0 0 0 / 30%);
  border-radius: 5px;
  padding: 10px;
  overflow: hidden;
  height: 80px;
`;

export const MButton = styled("button")`
  padding: 7px 15px;
  margin-top: ${(props) => (props.marginTop ? "10" : "")}px;
  margin-left: ${(props) => (props.marginLeft ? "10" : "")}px;
  border: 1px solid ${COLOR.Green};
  background-color: ${COLOR.Green};
  outline: none;
  width: -webkit-fill-available;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: transparent;
    border: 1px solid ${COLOR.Green};
    color: black;
    box-shadow: 2px 2px 6px rgb(0 0 0 / 30%);
  }
`;

export const MLink = styled(NavLink)``;

export const MLabel = styled("label")`
  display: block;
`;

export const MInput = styled("input")`
  box-shadow: 2px 2px 6px rgb(0 0 0 / 30%);
  padding: 15px;
  border-radius: 15px;
  display: block;
  border: 1px solid ${COLOR.Green};
  outline: none;
  margin-top: 10px;
  width: -webkit-fill-available;
`;

export const MSelect = styled("select")`
  box-shadow: 2px 2px 6px rgb(0 0 0 / 30%);
  padding: 15px;
  border-radius: 15px;
  display: block;
  border: 1px solid ${COLOR.Green};
  outline: none;
  margin-top: 10px;
  width: -webkit-fill-available;
`;

export const MFormGroup = styled("div")`
  margin-top: 15px;
`;
