import React from "react";
import Img1 from "../../../assets/BlogDetails/img1.png";
import Img2 from "../../../assets/BlogDetails/img2.png";
import { listReadMoreArticle } from "../../data/BlogDetails/readMoreArticle";
import ArticleCard from "../Blog/ArticleCard";

const BlogDetails = () => {
  return (
    <section>
      <div className="bg-bgSecondary px-6 py-4 md:px-16 lg:px-[220px] lg:pb-32 lg:pt-20">
        <h1 className="mb-4 text-center font-playFair font-medium text-tertary md:mb-8 md:text-4xl lg:mb-16 lg:max-w-[1080px] lg:text-h2">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
        <div className="mb-4 w-full md:mb-8">
          <img src={Img1} alt="img" className="w-full rounded-t-xl" />
        </div>
        <div className="mb-4 flex flex-col gap-2 md:mb-14 lg:mb-12 lg:gap-5">
          <h2 className="text-sm font-bold text-tertary md:text-lg lg:text-h3">What do you need to prepare a home-made burger?</h2>
          <p className="text-xs font-medium leading-5 text-secondary100 md:text-base lg:text-lg lg:leading-7">Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
          <ol className="flex list-decimal flex-col gap-2 px-4 text-xs font-medium text-secondary100 md:text-base lg:text-lg lg:leading-7">
            <li>Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
            <li>Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
            <li>Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
            <li>Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices</li>
            <li>Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
          </ol>
        </div>
        <div className="mb-4 flex flex-col gap-2 md:mb-14 lg:mb-12 lg:gap-5">
          <h2 className="text-sm font-bold text-tertary md:text-lg lg:text-h3">What do you need to prepare a home-made burger?</h2>
          <p className="text-xs font-medium leading-5 text-secondary100 md:text-base lg:text-lg lg:leading-7">Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
          <ol className="flex list-decimal flex-col gap-2 px-4 text-xs font-medium text-secondary100 md:text-base lg:text-lg lg:leading-7">
            <li>Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
            <li>Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
            <li>Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
            <li>Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices</li>
            <li>Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
          </ol>
        </div>

        <div className="mb-4 w-full">
          <img src={Img2} alt="img" className="w-full rounded-xl" />
        </div>
        <div className="mb-4 flex flex-col gap-2 lg:gap-5">
          <h2 className="text-sm font-bold text-tertary md:text-lg lg:text-h3">What are the right ingredients to make it delicious?</h2>
          <p className="text-xs font-medium leading-5 text-secondary100 md:text-base lg:text-lg lg:leading-7">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</p>
        </div>
      </div>
      <div className="bg-white p-4 md:px-8 md:py-32 lg:px-36">
        <div className="text-center">
          <h1 className="pb-4 font-playFair text-2xl lg:pb-10 lg:text-h2">Read More Articles</h1>
          <p className="mx-auto max-w-sm text-sm text-[#495460] lg:max-w-lg lg:text-paragraph1">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {listReadMoreArticle.map((item, index) => {
            return <ArticleCard {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
