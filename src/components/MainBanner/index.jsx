import React from "react";
import s from "./MainBanner.module.css";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";

export default function MainBanner() {
  return (
    <div className={`container" ${s.wrapper}`}>
      <div className={s.banner}>
        <h1>
          Amazing Discounts
          <span>on Garden Products!</span>
        </h1>
        <div className="btn">
          <ButtonComponent
            text="Check out"
            background={"var(--green, #393)"}
            padding="16px 56px"
            borderColor="var(--green, #393)"
            color={"white"}
          />
        </div>
      </div>
    </div>
  );
}
