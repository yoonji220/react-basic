import { useState } from "react";

function ArticleForm({
  initTitle = "",
  initDesc = "",
  initDifficulty = "",
  onSubmit,
}) {
  const [content, setContent] = useState({
    title: initTitle,
    desc: initDesc,
    difficulty: initDifficulty,
  });

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
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
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
  );
}
export default ArticleForm;
