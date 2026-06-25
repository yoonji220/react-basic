// import { useState } from "react";
import ArticleForm from "./ArticleForm";

function UpdateArticle({ title, desc, difficulty, onSubmit }) {
  console.log("UpdateArticle render");
  
  return (
    <>
      <h2>Update Article</h2>
      <ArticleForm
        initTitle={title}
        initDesc={desc}
        initDifficulty={difficulty}
        onSubmit={onSubmit}
      />
    </>
  );
}
export default UpdateArticle;
