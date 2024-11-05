import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const post = "React Blog";

  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "react 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div>
        <h1 className="blog-black-top">{post}</h1>
      </div>

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <div>
              <h4
                onClick={() => {
                  setModal(!modal);
                  setTitle(i);
                }}
                className="blog-main"
                style={{ color: "black", fontSize: "24px" }}
              >
                {글제목[i]}{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1;
                    따봉변경(copy);
                  }}
                >
                  👍
                </span>
                {따봉[i]}
              </h4>
              <p>11월 4일 발행</p>
            </div>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제버튼
            </button>
          </div>
        );
      })}

      <footer>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코드 추천";
            글제목변경(copy);
          }}
        >
          글 수정
        </button>
        <button
          onClick={() => {
            let copy = [...글제목].sort();
            글제목변경(copy);
          }}
        >
          정렬
        </button>
      </footer>

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

      {modal == true ? (
        <Modal
          title={title}
          color="skyblue"
          글제목={글제목}
          글제목변경={글제목변경}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자코트 추천";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
