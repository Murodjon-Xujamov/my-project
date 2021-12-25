import React, { useEffect } from "react";
import {
  MButton,
  MContainer,
  MGridFour,
  MImg,
  MProductCard,
  MProductCardBody,
  MProductCardImage,
  MProductPrice,
  MProductTitle,
} from "../element/Container";
import img from "../../assets/images/product.jpg";
import { useDispatch, useSelector } from "react-redux";
import { profileInfo, createStream } from "../../redux/actions/userActions";
import { fetchProducts } from "../../redux/actions/productActions";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileInfo());
    dispatch(fetchProducts());
  }, []);

  const getMe = useSelector((state) => state.user.userInfo);
  const products = useSelector((state) => state.products.list);

  return (
    <>
      <MContainer>
        <MGridFour>
          {products.map((product, index) => (
            <MProductCard key={index}>
              <MProductCardBody>
                <MProductCardImage>
                  <MImg src={img} alt="Product" />
                </MProductCardImage>
                <MProductTitle>{product.title}</MProductTitle>
                <MProductPrice>{product.price} so'm</MProductPrice>
                <MButton
                  onClick={() => {
                    dispatch(
                      createStream({
                        userId: getMe._id,
                        productId: product._id,
                        price: product.price,
                      })
                    );
                  }}
                >
                  Oqim yaratish
                </MButton>
              </MProductCardBody>
            </MProductCard>
          ))}
        </MGridFour>
      </MContainer>
    </>
  );
};

export default Admin;
