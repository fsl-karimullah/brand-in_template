import React from "react";
import Button from "../../base/Button";
import Blog1 from "../../../assets/Home/blog1.png";
import Blog2 from "../../../assets/Home/blog2.png";
import { listBlog } from "../../data/Home/blogAndArticle";

const BlogAndArticle = () => {
  return (
    <section className="bg-bgSecondary p-8 md:px-10 lg:px-[120px] lg:py-32">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:mb-12 lg:mb-16 lg:flex-row">
        <h2 className="font-playFair text-2xl font-medium md:text-3xl lg:text-h2">Our Blog & Articles</h2>
        <Button>Read All Article</Button>
      </div>
      <div className="mt-6 flex flex-col gap-3 md:gap-4 lg:flex-row lg:gap-6">
        <div className="rounded-xl shadow-lg">
          <div className="w-full">
            <img src={Blog1} alt="blog" className="w-full" />
          </div>
          <div className="flex flex-col gap-4 rounded-b-xl bg-white p-4">
            <span className="text-sm text-[#737865] md:text-paragraph2">January 3, 2023</span>
            <h3 className="font-medium md:text-paragraph3">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
            <p className="text-sm md:text-paragraph2">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
          {listBlog.map((item) => {
            return (
              <div key={item.id} className="rounded-xl shadow-lg">
                <div className="w-full">
                  <img src={item.img} alt="blog" className="w-full rounded-t-xl" />
                </div>
                <div className="flex flex-col gap-4 rounded-b-xl bg-white p-4">
                  <span className="text-sm font-medium text-[#737865]">{item.date}</span>
                  <h3 className="text-xs font-medium md:text-paragraph3">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogAndArticle;
