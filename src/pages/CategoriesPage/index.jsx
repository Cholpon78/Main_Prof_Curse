import React from "react";
import Breadcrumbs from "../../components/BreadCrumbs";
import s from './CategoriesPage.module.css'
import CategoryContainer from "../../components/CategoryContainer";
import { useSelector } from "react-redux";


export default function CategoriesPage() {
  const categories = useSelector((state) => state.category.categories);
  return (
    <div>
      <Breadcrumbs />
      <h2 className={s.title}>Categories</h2>
      <CategoryContainer categories={categories} />
    </div>
  );
}
