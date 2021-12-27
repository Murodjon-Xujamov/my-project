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
import { profileInfo } from "../../redux/actions/userActions";
import { fetchProducts } from "../../redux/actions/productActions";
import Modal from "react-modal";
import requests from "../../helpers/requests";
import "../../assets/scss/_style.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    textAlign: "center",
  },
};

const Admin = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [stream_url, set_stream_url] = React.useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileInfo());
    dispatch(fetchProducts());
  }, []);

  const getMe = useSelector((state) => state.user.userInfo);
  const products = useSelector((state) => state.products.list);

  function closeModal() {
    setIsOpen(false);
  }

  const createStream = (params) => {
    dispatch({ type: "create_stream_start", payload: params });

    requests
      .createStream(params)
      .then(({ data }) => {
        dispatch({ type: "create_stream_success", payload: data });
        set_stream_url(data.createUrl);
        setIsOpen(true);
      })
      .catch(({ response }) => {
        let message =
          (response && response.data.message) ||
          "Foydalanuvchi profilini yuklashda xatolik bor";

        dispatch({ type: "create_stream_error", payload: message });
      });
  };

  return (
    <>
      <MContainer>
        Umumiy balans: {getMe.balans}
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
                    createStream({
                      userId: getMe._id,
                      productId: product._id,
                      price: product.price,
                    });
                  }}
                >
                  Oqim yaratish
                </MButton>
              </MProductCardBody>
            </MProductCard>
          ))}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h2>Asia.shop</h2>
            <input
              defaultValue={stream_url}
              disabled
              className="stream_input"
            />
            <div className="modal_btn_row">
              <MButton
                onClick={() => navigator.clipboard.writeText(stream_url)}
              >
                Copy
              </MButton>
              <MButton onClick={closeModal} marginLeft={10}>
                Orqaga
              </MButton>
            </div>
          </Modal>
        </MGridFour>
      </MContainer>
    </>
  );
};

export default Admin;
