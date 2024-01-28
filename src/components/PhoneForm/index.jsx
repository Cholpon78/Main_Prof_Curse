import React, { useState } from "react";
import InputComponent from "../../UI/InputUI";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";
import s from "./PhoneForm.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PhoneForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const validateForm = () => {
    if (!/\s/.test(name) || name.split(" ").length < 2) {
      toast.error("Name should consist of at least two words");
      return false;
    }

    if (phone.length < 5) {
      toast.error("Phone number should be at least 5 characters long");
      return false;
    }

    if (!/@/.test(email)) {
      toast.error("Invalid email format");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
  
      toast.success("Discount added", {
        position: "top-right",
      });


      setTimeout(() => {
        setName("");
        setPhone("");
        setEmail("");
      }, 0);

      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div>
      <form className={s.phone_form} onSubmit={handleSubmit}>
        <InputComponent
          placeholder={"Name"}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          autocomplete={"off"}
        />

        <InputComponent
          placeholder={"Phone Number"}
          type={"tel"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autocomplete={"off"}
        />

        <InputComponent
          placeholder={"Email"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autocomplete={"off"}
        />

        <ButtonComponent
          text="Get a discount"
          type="submit"
          fontSize={"20px"}
          background={"--white: #fff"}
        />
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
