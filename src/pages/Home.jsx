import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

// 기본 홈페이지 컴포넌트

const getMonthlyData = (pivotDate, data) => {
  // 해당 월의 시작시간 (0시 0분 0초)
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  // 해당 월의 종료시간 (23시 59분 59초)
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  // 해당기간에 있는 일기만 필터링
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
};

const Home = () => {
  // Context로부터 일기 데이터 전달받음
  const data = useContext(DiaryStateContext);
  // 피벗 날짜 상태
  const [pivotDate, setPivotDate] = useState(new Date());
  // 브라우저 탭 제목
  usePageTitle("감정 일기장");

  // pivotDate 변경때마다 해당 월의 데이터 확인
  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);

  // 월 이동 함수 (다음 달)
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  // 월 이동 함수 (이전 달)
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      {/* 헤더: 현재 연도/월 표시, 이동버튼 */}
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      {/* 일기장 리스트 렌더링 */}
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
