import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/_profile.scss";
import { MContainer, MImg, MLink } from "../element/Container";
import { profileInfo } from "../../redux/actions/userActions";
import { RiShareForward2Fill, RiStackshareFill } from "react-icons/ri";
import { SiFirefox } from "react-icons/si";
import { MdMonetizationOn } from "react-icons/md";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileInfo());
  }, []);
  const getMe = useSelector((state) => state.user.userInfo);

  return (
    <MContainer>
      <div class="section_admin">
        <div class="admin_boxing">
          <div class="admin_user">
            <div class="admin_user_avatar">
              <MImg src={getMe.avatar_url} alt="Vektor" />
            </div>
            <div class="admin_user_full_name">
              <h2>
                {getMe.firstName} - {getMe.lastName}
              </h2>
              <p>My I 1998 y 17. 01</p>
            </div>
          </div>
          <div class="admin_card">
            <div class="admin_card_user_info">
              <div class="admin_full_name">
                <h3>Xujamov Murodjon</h3>
              </div>
              <div class="admin_card_number">
                <p>8600 **** **** 1234</p>
              </div>
            </div>
            <div class="admin_bonus">
              <h4>Balans</h4>
              <h2>{getMe.balans} so'm</h2>
            </div>
          </div>
          <div class="admin_card_boxs">
            <MLink to="/admin">
              <div class="card_box">
                <RiShareForward2Fill />
                <h4>Oqimlar</h4>
              </div>
            </MLink>
            <div class="card_box">
              <SiFirefox />
              <h4>Masalan</h4>
            </div>
            <div class="card_box">
              <RiStackshareFill />
              <h4>Test</h4>
            </div>
            <div class="card_box">
              <MdMonetizationOn />
              <h4>Pul yechish</h4>
            </div>
          </div>
        </div>
      </div>
    </MContainer>
  );
};

export default Profile;
