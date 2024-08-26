import React from "react";
import ArticleCard from "./ArticleCard";
import { listBlog } from "../../data/BlogAndArticle/blog";

const BlogAndArticle = () => {
  return (
    <section className="bg-bgSecondary p-4 md:px-10 lg:px-[120px] lg:pb-32 lg:pt-20">
      <div className="text-center">
        <h1 className="lg:text-h1Header pb-4 font-playFair text-4xl lg:pb-10">Our Blog & Articles</h1>
        <p className="mx-auto max-w-sm text-sm text-[#495460] lg:max-w-lg lg:text-paragraph1">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-3 lg:mt-20 lg:grid-cols-4 lg:gap-6">
        {listBlog.map((item, index) => {
          return <ArticleCard {...item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default BlogAndArticle;
