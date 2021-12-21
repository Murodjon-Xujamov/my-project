import React from "react";
import {
  MContainer,
  MGrid,
  MInput,
  MLabel,
  MSelect,
  MFormGroup,
} from "../element/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../assets/scss/_style.scss";

const OrderProduct = () => {
  return (
    <MContainer>
      <h2 className="order_product_title">
        <span>Kompyuter</span>
        <span>1500000 so'm</span>
      </h2>
      <MGrid>
        <div>
          <Carousel>
            <div>
              <img
                src={"https://picsum.photos/200/100?random=1"}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src={"https://picsum.photos/200/100?random=2"}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src={"https://picsum.photos/200/100?random=3"}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Carousel>
        </div>
        <div className="product_order_form">
          <h2>Buyurtma berish</h2>
          <form>
            <MFormGroup>
              <MLabel>Ismingiz</MLabel>
              <MInput placeholder="Ism" />
            </MFormGroup>
            <MFormGroup>
              <MLabel>Telifon raqamingiz</MLabel>
              <MInput placeholder="+998 ** *** ** **" />
            </MFormGroup>
            <MFormGroup>
              <MLabel>Viloyat</MLabel>
              <MSelect>
                <option>Toshkent</option>
              </MSelect>
            </MFormGroup>
          </form>
        </div>
      </MGrid>
    </MContainer>
  );
};

export default OrderProduct;
