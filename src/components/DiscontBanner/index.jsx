import React from "react";
import image from "../../assets/banner2.svg"
import s from "./DiscontBanner.module.css";
import PhoneForm from "../PhoneForm";

export default function DiscontBanner() {
  return (
<div className='container'>
  <div className={s.container}>
    <h2 className={s.h2}>5% off on the first order</h2>
    <div className={s.discount_wrapper}>
      <img className={s.discont_banner }src={image} alt="discount" />
       <div className={s.phone_form}>
          <PhoneForm/>
       </div>
     
    </div>
   
  </div>
  ;
</div>
  )
}
