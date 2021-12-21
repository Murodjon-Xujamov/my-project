import React from "react";
import {
  MContainer,
  MImg,
  MRow,
  MGridThree,
  MCardCategory,
} from "../element/Container";

const Category = () => {
  return (
    <MContainer>
      <MGridThree>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 32, 45, 65].map((n) => (
          <MCardCategory key={n}>
            <MRow>
              <div>
                <MImg
                  src={"https://picsum.photos/seed/picsum/200/80"}
                  alt="Image_Category"
                />
              </div>
              <div>
                <h3>Bolalar</h3>
                <span>Bolalar</span>
              </div>
              <div>({n})</div>
            </MRow>
          </MCardCategory>
        ))}
      </MGridThree>
    </MContainer>
  );
};

export default Category;
