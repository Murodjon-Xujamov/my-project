import React, { useEffect, useState } from "react";
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
import { createOrder } from "../../redux/actions/orderActions";

const OrderProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductOne(id));
  }, []);

  const product = useSelector((state) => state.products.data);
  const [title, setTitle] = useState(product.title);
  // const [productId, setProductId] = useState(product._id);
  // const [quantity, setQuantity] = useState(product.price);
  const [customer_name, setCustomer_name] = useState("");
  const [customer_phone, setCustomer_phone] = useState("");
  console.log(product);

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
              placeholder="+998 ** *** ** **"
              onChange={(e) => {
                setCustomer_phone(e.target.value);
              }}
            />
          </MFormGroup>
          <MFormGroup>
            <MLabel>Viloyat</MLabel>
            <MSelect>
              <option>Toshkent</option>
            </MSelect>
          </MFormGroup>
          <MButton
            className="order_button"
            onClick={() => {
              dispatch(
                createOrder({
                  title,
                  productId: id,
                  customer_name,
                  customer_phone,
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
