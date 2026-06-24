import "./App.css";
import Myheader from "./components/Myheader";
import Nav from "./components/Nav";
import MyArticle from "./components/MyArticle";
import { useState, useCallback, useMemo } from "react";
import Controls from "./components/controls";
import CreateArticle from "./components/createArticle";
import UpdateArticle from "./components/UpdateArticle";
import { v4 as uuidv4 } from "uuid";

function App() {
  console.log("App render");
  const [id, setId] = useState(1);
  const [mode, setMode] = useState("welcome");
  const [subject, setSubject] = useState({
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  });
  const [content, setContent] = useState([
    {
      id: "1",
      title: "UI/UX 개발",
      desc: "사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현",
      difficulty: 1,
    },
    {
      id: "2",
      title: "재사용이 가능한 UI 개발",
      desc: "컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능",
      difficulty: 2,
    },
    {
      id: "3",
      title: "애니메이션 구현",
      desc: "상태 변화에 따른 자연스럽고 동적인 화면 효과 구현",
      difficulty: 3,
    },
  ]);
  // const [maxId, setMaxid] = useState(3);

  const welcome = { title: "welcome", desc: "Welcome to react" };

  let _title = null;
  let _desc = null;
  let _difficulty = null;
  let _article = null;

  const selectedArticle = useMemo(
    () => content.find(item => item.id === id),
    [content, id],
  );

  const handleDelete = () => {
    if (window.confirm("정말 삭제할까요")) {
      setContent(prev => prev.filter(item => item.id !== id));
      setMode("welcome");
    } else {
      setMode("welcome");
    }
  };

  if (mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <MyArticle title={_title} desc={_desc} />;
  } else if (mode === "read") {
    // const selected = content.find(c => c.id === id);
    if (selectedArticle) {
      _title = selectedArticle.title;
      _desc = selectedArticle.desc;
      _difficulty = selectedArticle.difficulty;
    }
    // console.log(selected);
    // if (selected) {
    //   _title = selected.title;
    //   _desc = selected.desc;
    // }
    _article = (
      <MyArticle
        title={_title}
        desc={_desc}
        difficulty={_difficulty}
        onChangeMode={() => {
          setMode("update");
        }}
        onDelete={handleDelete}
      />
    );
  } else if (mode === "create") {
    _article = (
      <CreateArticle
        onSubmit={(_title, _desc, _difficulty) => {
          const newId = uuidv4();

          let _contents = content.concat({
            id: newId,
            title: _title,
            desc: _desc,
            difficulty: Number(_difficulty),
          });
          setContent(_contents);
          // setMaxid(newId);
          setId(newId);
          setMode("read");
        }}
      />
    );
  } else if (mode === "update") {
    // const selected = content.find(c => c.id === id);
    if (!selectedArticle) return null;

    _article = (
      <UpdateArticle
        title={selectedArticle.title}
        desc={selectedArticle.desc}
        difficulty={selectedArticle.difficulty}
        onSubmit={(_title, _desc, _difficulty) => {
          // let _content = content.map(c =>
          //   c.id === id
          //     ? {
          //         ...c,
          //         title: _title,
          //         desc: _desc,
          //       }
          //     : c,
          // );
          // setContent(_content);
          setContent(prev =>
            prev.map(p =>
              p.id === id
                ? {
                    ...p,
                    title: _title,
                    desc: _desc,
                    difficulty: Number(_difficulty),
                  }
                : p,
            ),
          );
          setMode("read");
        }}
      />
    );
  }

  const handleChangeMode = useCallback(_id => {
    console.log(_id);
    setMode("read");
    setId(_id);
  }, []);

  return (
    <>
      <Myheader
        title={subject.title}
        desc={subject.desc}
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      {/* <header>
        <h1
          className="logo"
          onClick={() => {
            setMode("welcome");
          }}
        >
          {subject.title}
        </h1>
        <p>{subject.desc}</p>
      </header> */}
      <Nav data={content} onChangeMode={handleChangeMode} />
      {_article}
      <hr />
      <Controls
        onChangeMode={() => {
          setMode("create");
        }}
      />
    </>
  );
}

export default App;
