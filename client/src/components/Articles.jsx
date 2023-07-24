import React from "react";
import ArticleCard from "./ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services/index/post";
import { toast } from "react-hot-toast";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className="container mx-auto flex flex-wrap sm:gap-x-12 gap-y-5 px-5 py-10">
      {!isLoading &&
        !isError &&
        data.map((post) => (
          <ArticleCard
            key={post._id}
            post={post}
            className="w-full sm:w-[calc(30%-10px)]"
          />
        ))}
    </section>
  );
};

export default Articles;
