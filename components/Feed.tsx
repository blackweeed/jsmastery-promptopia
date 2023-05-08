"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [serchedItems, setSearchedItems] = useState(null);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText("");
    setSearchedItems(
      posts.filter(
        (item) => item.prompt === searchText || item.tag === searchText
      )
    );
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
  };

  return (
    <section className="feed">
      <form onSubmit={handleSearch} className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or username"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={serchedItems !== null ? serchedItems : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
