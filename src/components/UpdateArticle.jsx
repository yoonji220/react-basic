import { useState } from "react";

function UpdateArticle({ title, desc, difficulty, onSubmit }) {
  console.log("UpdateArticle render");
  const [content, setContent] = useState({
    title: title,
    desc: desc,
    difficulty: difficulty,
  });
  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);
  // const handleTitleChange = e => {
  //   setNewTitle(e.target.value);
  // };
  // const handleDescChange = e => {
  //   setNewDesc(e.target.value);
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          // onSubmit(e.target.title.value, e.target.desc.value);
          onSubmit(content.title, content.desc, content.difficulty);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={content.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea
            name="desc"
            id="desc"
            value={content.desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">난이도</label>
          <input
            type="number"
            name="difficulty"
            id="difficulty"
            min="1"
            value={content.difficulty}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default UpdateArticle;
