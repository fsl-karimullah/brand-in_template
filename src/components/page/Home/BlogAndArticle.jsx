import React from "react";
import Button from "../../base/Button";
import Blog1 from "../../../assets/Home/blog1.png";
import Blog2 from "../../../assets/Home/blog2.png";

const BlogAndArticle = () => {
  return (
    <section className="bg-bgSecondary p-8 md:px-10 lg:px-[120px] lg:py-32">
      <div className="flex flex-col items-center justify-between gap-4">
        <h2 className="font-playFair text-2xl font-medium md:text-3xl lg:text-h2">Our Blog & Articles</h2>
        <Button>Read All Article</Button>
      </div>
      <div>
        <div>
          <div>
            <img src={Blog1} alt="" />
          </div>
          <div className="flex flex-col gap-4 bg-white">
            <span>January 3, 2023</span>
            <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
            <p>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default BlogAndArticle;
