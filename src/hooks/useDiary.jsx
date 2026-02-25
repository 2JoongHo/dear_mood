// 함수이름에 use가 붙을 경우 커스텀훅으로 사용

import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// id가 일치하는 일기 데이터를 불러오는 커스텀훅

const useDiary = (id) => {
  // Context로부터 전체 일기 데이터 가져오기
  const data = useContext(DiaryStateContext);
  // 현재 찾은 일기 아이템을 저장
  const [curDiaryItem, setCurDiaryItem] = useState();
  // 페이지 이동을 위한 네비게이트 함수
  const nav = useNavigate();
  // id 또는 data가 변경 될 때마다 실행
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id),
    );
    // 검색 된 아이템이 없을 경우
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      // 확인 후 홈페이지로 이동, 뒤로가기 방지
      nav("/", { replace: true });
    }
    // 일기 데이터를 찾았을 경우 업데이트
    setCurDiaryItem(currentDiaryItem);
    // id 또는 data가 바뀔 경우 다시 실행
  }, [id, data]);
  // 찾은 ㅇ리기 아이템 반환
  return curDiaryItem;
};

export default useDiary;
