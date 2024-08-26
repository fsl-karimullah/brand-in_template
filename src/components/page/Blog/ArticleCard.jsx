import React from "react";
import Img1 from "../../../assets/BlogAndArticle/img1.png";
import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  return (
    <Link to={"/blog/details"} className="rounded-xl bg-white shadow-md">
      <div className="w-full">
        <img src={props.img} alt="img" className="w-full rounded-t-xl" />
      </div>
      <div className="p-4 lg:p-7">
        <p className="mb-1 text-sm font-medium text-[#737865] lg:mb-3">{props.date}</p>
        <h5 className="text-paragraph3">{props.title}</h5>
      </div>
    </Link>
  );
};

export default ArticleCard;
