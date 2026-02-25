import { createContext, useReducer, useRef, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 감정 일기장 구성
// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

// reducer 함수
// 일기 상태 관리 담당
// 상태 변경 시 로컬 스토리지에 저장
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    // 초기 데이터 로드
    case "INIT":
      return action.data;
    // 새로운 일기 추가
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    // 기존 일기 수정 (id가 일치할 경우 항목 교체)
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    }
    // 일기 삭제 기능
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  // 변경 된 상태를 로컬 스토리지에 저장
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

// 하위 컴포넌트에서 사용하도록 Context 생성
// 일기 데이터 전달
export const DiaryStateContext = createContext();
// 데이터 조작 함수 전달
export const DiaryDispatchContext = createContext();

function App() {
  // 로컬 스토리지 데이터 로딩 상태
  const [isLoading, setIsLoading] = useState(true);
  // 일기 데이터 관리
  const [data, dispatch] = useReducer(reducer, []);
  // 새로 생성 될 일기의 ID 관리
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);

    // parsed값이 배열이 아닐 경우
    // 저장 된 데이터가 유효한 배열인지 확인
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    // 마지막으로 저장 된 값중 제일 높은 값
    // 다음에 생성 될 ID 설정
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    // 데이터 초기화
    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  // createdDate: 작성 날짜
  // emotionId: 아이디
  // content: 일기 내용
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  //기존 일기 수정
  // id: 수정할 일기의 ID
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  //기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          {/* 경로 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
