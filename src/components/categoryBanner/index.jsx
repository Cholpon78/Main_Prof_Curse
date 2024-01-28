import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./CategoryBanner.module.css";
import { fetchCategories } from "../../asyncAction/categoriesFetch";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";
import { rootUrl } from "../../helpers";


export default function CategoryBanner({ sliceLimit }) {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={`container ${s.wrapper}`}>
      <div className={s.title_btn}>
        <h2 className={s.title}>Categories</h2>
        <div className={s.categories_line}></div>
        <div className={s.category_line_container}>
          
          <ButtonComponent
            text="All categories"
            fontSize={"16px"}
        padding={"12px 24px"}
            color={"#8B8B8B"}
            
          />
        </div>
      </div>
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
    </div>
  );
}
