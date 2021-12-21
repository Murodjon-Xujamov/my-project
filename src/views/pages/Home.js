import React from "react";
import "../../assets/scss/_home.scss";
import {
  MContainer,
  MInformationsContainer,
  MInformations,
  MGridFour,
  MProductCardImage,
  MProductCard,
  MImg,
  MProductCardBody,
  MProductTitle,
  MProductPrice,
  MProductIcons,
  MRow,
  MHomePage,
  MHomeHeaderPage,
  MHomeHeaderImage,
  MButton,
  MLink,
} from "../element/Container";
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart, FaRegCommentDots } from "react-icons/fa";
import image from "../../assets/images/product.jpg";

const Home = () => {
  return (
    <>
      <MHomeHeaderPage>
        <MHomeHeaderImage>
          <MHomePage className="home_page_color">
            <MContainer>
              <h1 className="home_page_text_info">
                Eng
                <span className="home_page_text_info_color_yellow">
                  {" "}
                  yaxshi
                </span>{" "}
                va eng <br /> yuqori darajali online <br />
                <span className="home_page_text_info_border_bottom">
                  magazin
                </span>
              </h1>
            </MContainer>
          </MHomePage>
        </MHomeHeaderImage>
      </MHomeHeaderPage>

      <MInformationsContainer>
        <MInformations>Yangi mahsulotlar</MInformations>
      </MInformationsContainer>

      <MContainer>
        <MGridFour>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
            <MProductCard key={n}>
              <MProductCardImage>
                <MImg src={image} alt="" />
              </MProductCardImage>
              <div className="product_card_right">New</div>
              <MProductCardBody>
                <MProductTitle>Murodjon</MProductTitle>
                <MProductPrice>349.000 so'm</MProductPrice>
                <MProductIcons>
                  <FiHeart />
                  <FaShoppingCart />
                  <FaRegCommentDots />
                </MProductIcons>
                <MLink to="/order-product">
                  <div className="product_order_button">
                    <MButton>Buyurtma berish</MButton>
                  </div>
                </MLink>
              </MProductCardBody>
            </MProductCard>
          ))}
        </MGridFour>
      </MContainer>
      <MInformationsContainer>
        <MInformations>Chegirma 50%</MInformations>
      </MInformationsContainer>
      <MContainer>
        <MGridFour>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
            <MProductCard key={n}>
              <MProductCardImage>
                <MImg src={image} alt="" />
              </MProductCardImage>
              <div className="product_card_right discount_sena">Skidka</div>
              <MProductCardBody>
                <MProductTitle>Murodjon</MProductTitle>
                <MRow>
                  <MProductPrice className="product_skidka">
                    349.000 so'm{" "}
                  </MProductPrice>
                  <MProductPrice className="product_after_discount">
                    199.000 so'm
                  </MProductPrice>
                </MRow>
                <MProductIcons>
                  <FiHeart />
                  <FaShoppingCart />
                  <FaRegCommentDots />
                </MProductIcons>
                <div className="product_order_button">
                  <MButton>Buyurtma berish</MButton>
                </div>
              </MProductCardBody>
            </MProductCard>
          ))}
        </MGridFour>
      </MContainer>
      <MInformationsContainer>
        <MInformations>Mahsulotlar</MInformations>
      </MInformationsContainer>
      <MContainer>
        <MGridFour>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
            <MProductCard key={n}>
              <MProductCardImage>
                <MImg src={image} alt="" />
              </MProductCardImage>
              <MProductCardBody>
                <MProductTitle>Murodjon</MProductTitle>
                <MProductPrice>349.000 so'm</MProductPrice>
                <MProductIcons>
                  <FiHeart />
                  <FaShoppingCart />
                  <FaRegCommentDots />
                </MProductIcons>
                <div className="product_order_button">
                  <MButton>Buyurtma berish</MButton>
                </div>
              </MProductCardBody>
            </MProductCard>
          ))}
        </MGridFour>
      </MContainer>
    </>
  );
};

export default Home;
