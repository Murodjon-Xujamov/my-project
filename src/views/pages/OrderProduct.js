import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import {
  MContainer,
  MGrid,
  MInput,
  MLabel,
  MSelect,
  MFormGroup,
  MButton,
} from "../element/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../assets/scss/_style.scss";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductOne } from "../../redux/actions/productActions";
import { getLocations } from "../../redux/actions/locationActions";
import { createOrder } from "../../redux/actions/orderActions";

const OrderProduct = () => {
  const { productId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const stream_user = queryString.parse(location.search);

  useEffect(() => {
    dispatch(fetchProductOne(productId));
    dispatch(getLocations());
  }, []);

  const product = useSelector((state) => state.products.data);
  const locations = useSelector((state) => state.locations.list);

  const [customer_name, setCustomer_name] = useState("");
  const [customer_phone, setCustomer_phone] = useState("");
  const [region_id, setRegion_id] = useState();

  return (
    <MContainer>
      <h2 className="order_product_title">
        <span>{product.title}</span>
        <span>{product.price} so'm</span>
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
          <MFormGroup>
            <MLabel>Ismingiz</MLabel>
            <MInput
              placeholder="Ism"
              onChange={(e) => {
                setCustomer_name(e.target.value);
              }}
            />
          </MFormGroup>
          <MFormGroup>
            <MLabel>Telifon raqamingiz</MLabel>
            <MInput
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+998 ** *** ** **"
              onChange={(e) => {
                setCustomer_phone(e.target.value);
              }}
            />
          </MFormGroup>
          <MFormGroup>
            <MLabel>Viloyat</MLabel>
            <MSelect onChange={(e) => setRegion_id(e.target.value)}>
              {locations.map((loc, index) => (
                <option key={index} value={loc._id}>
                  {loc.name}
                </option>
              ))}
            </MSelect>
          </MFormGroup>
          <MButton
            className="order_button"
            onClick={() => {
              dispatch(
                createOrder({
                  product_id: productId,
                  customer_name,
                  customer_phone,
                  region_id,
                  stream_id: stream_user.stream,
                })
              );
            }}
          >
            Buyurtma berish
          </MButton>
        </div>
      </MGrid>
    </MContainer>
  );
};

export default OrderProduct;
