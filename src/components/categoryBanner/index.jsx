import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./CategoryBanner.module.css";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../asyncAction/categoriesFetch";
import CategoryContainer from "../CategoryContainer";

const CategoryBanner = ({ sliceLimit }) => {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleAllCategoriesClick = () => {
    navigate("/categories");
  };

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
            onClick={handleAllCategoriesClick}
          />
        </div>
      </div>
      <CategoryContainer categories={categories} sliceLimit={sliceLimit} />
    </div>
  );
};

export default CategoryBanner;
