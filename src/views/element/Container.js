import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLOR } from "./Variables";

export const MContainer = styled("div")`
  max-width: 90%;
  margin: 0 auto;
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
`;

export const MHeader = styled("header")`
  color: white;
  background: ${COLOR.GreenGradient};
  height: 150px;
`;

export const MHeaderInfo = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MNavbarSelectDropdown = styled("div")`
  border-top: 2px solid white;
  border-bottom: 2px solid white;
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
`;

export const MInformations = styled("div")`
  background: ${COLOR.Green};
  padding: 3px 30px 7px 30px;
  width: max-content;
  font-size: 18px;
  color: white;
`;

export const MGridFour = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const MProductCard = styled("div")`
  background: #fff;
  box-shadow: 2px 2px 6px rgb(0 0 0 / 30%);
  margin-bottom: 0.5rem;
  border-radius: 6px;
  position: relative;
`;
export const MProductCardImage = styled("div")`
  border-radius: 5px;
  overflow: hidden;
`;
export const MImg = styled("img")`
  width: 100%;
  height: auto;
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
`;
