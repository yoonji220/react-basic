import ArticleForm from "./ArticleForm";

function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <ArticleForm onSubmit={onSubmit} />
      {/* <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">난이도</label>
          <input
            type="number"
            name="difficulty"
            id="difficulty"
            min="1"
          />
        </div>
        <button>Submit</button>
      </form> */}
    </>
  );
}
export default CreateArticle;
