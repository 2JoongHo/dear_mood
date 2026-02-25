import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 일기 목록 컴포넌트

const DiaryList = ({ data }) => {
  // 페이지 이동을 위한 네비게이트 함수
  const nav = useNavigate();
  // 정렬 기준, 기본값: 최신순
  const [sortType, setSortType] = useState("latest");
  // 정렬 기준 변경 이벤트 핸들러
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  // 정렬하는 함수
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        // 오래된 순: 작성일 기준 오름차순
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        // 최신순: 작성일 기준 내림차순
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };
  // 정렬 된 데이터를 sortedData에 저장
  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      {/* 메뉴: 정렬 선택, 새 일기쓰기 버튼 */}
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>

        {/* 새 일기쓰기 버튼 */}
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      {/* 일기 아이템 리스트 렌더링 */}
      <div className="list_wrapper">
        {sortedData.map((item) => (
          // 스프레드 연산자로 item의 모든 속성을 props로 전달
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default DiaryList;
