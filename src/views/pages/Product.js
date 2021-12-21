import React from "react";
import {
  MContainer,
  MGridFour,
  MProductCard,
  MProductCardImage,
  MImg,
  MProductPriceGalery,
} from "../element/Container";

const Product = () => {
  return (
    <>
      <MContainer>
        <MGridFour>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((n) => (
            <MProductCard key={n}>
              <MProductCardImage>
                <MImg
                  src={`https://picsum.photos/200/200?random=${n}`}
                  alt="Image"
                />
                <MProductPriceGalery>122211 so'm</MProductPriceGalery>
              </MProductCardImage>
            </MProductCard>
          ))}
        </MGridFour>
      </MContainer>
    </>
  );
};

export default Product;
