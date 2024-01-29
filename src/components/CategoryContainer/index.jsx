import React from "react";
import s from "./CategoryContainer.module.css";
import { rootUrl } from "../../helpers";

const CategoryContainer = ({ categories, sliceLimit }) => {
  return (
    <div className={s.category_container}>
      {categories.slice(0, sliceLimit).map((category) => (
        <div className={s.category_wrapper} key={`${category.id}`}>
          <img
            className={s.category_img}
            src={`${rootUrl}${category.image}`}
            alt={`${category.title}`}
          />
          <p className={s.category_title}>{`${category.title}`} </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryContainer;
