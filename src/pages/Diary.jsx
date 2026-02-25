import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

// 일기 상세 페이지 컴포넌트

const Diary = () => {
  // url 파라미터에서 일기의 id 가져오기
  const params = useParams();
  // 페이지 이동을 위한 네비게이트 함수
  const nav = useNavigate();
  // 해당 ID와 일치하는 일기 아이템 확인
  const curDiaryItem = useDiary(params.id);
  // 브라우저 탭 제목 (해당 일기의 ID로)
  usePageTitle(`${params.id}번 일기`);
  // 찾는 일기가 없을 경우 예외처리
  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }
  // 현재 일기 아이템에서 필요한 정보를 구조분해 할당
  const { createdDate, emotionId, content } = curDiaryItem;
  // 날짜를 문자열 형식으로 변경하여 타이틀 생성
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      {/* 헤더: 뒤로가기 버튼, 해당 날짜, 수정하기 버튼 */}
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      {/* 뷰어 컴포넌트 */}
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
