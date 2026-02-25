import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import usePageTitle from "../hooks/usePageTitle";

// 새 일기 페이지 컴포넌트

const New = () => {
  // Context로부터 일기 생성함수 가져오기
  const { onCreate } = useContext(DiaryDispatchContext);
  // 페이지 이동을 위한 네비게이트 함수
  const nav = useNavigate();
  // 브라우저 탭 제목
  usePageTitle("새 일기 쓰기");

  // 작성 완료 이벤트핸들러
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // 일기가 추가 된 후 홈페이지로 이동, 뒤로가기 방지
    nav("/", { replace: true });
  };

  return (
    <div>
      {/* 헤더: 뒤로가기 버튼 */}
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      {/* 에디터 컴포넌트 */}
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
