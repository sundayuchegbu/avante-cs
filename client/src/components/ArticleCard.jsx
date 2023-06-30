import React from "react";
import arrow4 from "../images/arrow4.png";
import { Link } from "react-router-dom";
import { images } from "../constants";
import { stables } from "../constants";
const ArticleCard = ({ post, className }) => {
  return (
    <div className={`rounded-xl overflow-hidden ${className}`}>
      <Link to={`/details/${post.slug}`}>
        <img
          src={
            post.photo
              ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
              : images.flash
          }
          alt="article1"
          className="w-full object-cover object-center h-auto  "
        />
      </Link>

      <div className="p-5 ">
        <p className="font-inter font-normal text-primary sm:text-[12px] text-[9px] ">
          {post.user.name} | {new Date(post.createdAt).getDate()}{" "}
          {new Date(post.createdAt).toLocaleString("default", {
            month: "long",
          })}{" "}
          {new Date(post.createdAt).getFullYear()}
        </p>
        <div className=" block ">
          {" "}
          <Link to={`/details/${post.slug}`}>
            <h2 className="font-inter font-semibold sm:w-[334px] sm:h-[69px] sm:leading-[40.8px] sm:text-[24px] text-[16px] text-black1 ">
              {post.title}{" "}
            </h2>
            <p className="block font-inter font-normal text-black sm:w-[334px] sm:h-[69px] sm:text-[14px] text-[10px] sm:leading-[25.8px] ">
              {post.caption}
            </p>
          </Link>
          <div className="absolute mt-12">
            <Link to={`/details/${post.slug}`}>
              <button className="flex sm:ml-8 ml-[-53px] items-center block text-[12px]  ">
                <span className=" mr-20 font-inter font-normal">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={arrow4}
                    alt="whitearrow"
                    className="sm:w-[70%] w-[50%] sm:h-[70%] h-[50%]"
                  />
                </i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
