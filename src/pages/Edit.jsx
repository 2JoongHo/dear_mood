import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

// 일기 수정 페이지 컴포넌트

const Edit = () => {
  // url 파라미터에서 일기의 id 가져오기
  const params = useParams();
  // 페이지 이동을 위한 네비게이트 함수
  const nav = useNavigate();
  // Context에서 삭제, 수정함수 가져오기
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  // 해당 ID의 일기 데이터 불러오기
  const curDiaryItem = useDiary(params.id);
  // 브라우저 탭 제목 (해당 일기의 ID로)
  usePageTitle(`${params.id}번 일기 수정`);

  // 일기 삭제 이벤트 핸들러
  const onClickDelete = () => {
    // 윈도우 컨펌
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 일기 삭제 로직
      onDelete(params.id);
      // 일기가 삭제 된 후 홈페이지로 이동, 뒤로가기 방지
      nav("/", { replace: true });
    }
  };

  // 일기 수정 이벤트 핸들러
  const onSubmit = (input) => {
    // 윈도우 컨펌
    if (window.confirm("일기를 정말 수정할까요?")) {
      // 일기 수정 로직
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      // 일기가 삭제 된 후 홈페이지로 이동, 뒤로가기 방지
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      {/* 헤더: 뒤로가기 버튼, 삭제하기 버튼 */}
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      {/* 에디터 컴포넌트 */}
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
