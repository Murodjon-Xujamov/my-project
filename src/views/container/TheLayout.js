import React from "react";
import TheContent from "./TheContent";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

const TheLayout = () => {
  return (
    <div>
      <TheHeader />
      <TheContent />
      <TheFooter />
    </div>
  );
};

export default TheLayout;
