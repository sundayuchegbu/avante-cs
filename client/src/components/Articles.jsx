import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section className="container mx-auto flex flex-wrap sm:gap-x-12 gap-y-5 px-5 py-10">
      <ArticleCard className="w-full sm:w-[calc(30%-10px)]" />
      <ArticleCard className="w-full sm:w-[calc(30%-10px)]" />
      <ArticleCard className="w-full sm:w-[calc(30%-10px)]" />
      <ArticleCard className="w-full sm:w-[calc(30%-10px)]" />
      <ArticleCard className="w-full sm:w-[calc(30%-10px)]" />
      <ArticleCard className="w-full sm:w-[calc(30%-10px)]" />
    </section>
  );
};

export default Articles;
