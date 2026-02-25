import { use } from "react";
import { getEmotionImage } from "../util/get-emotion-images";
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";

// 일기 항목 컴포넌트

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  // 페이지 이동을 위한 네비게이트 함수
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      {/* 감정 이미지, 클릭 시 상세 페이지로 이동 */}
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      {/* 인포, 클릭 시 상세 페이지로 이동 */}
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        {/* 일기의 날짜 표기, 문자열로 변환 */}
        <div className={"created_date"}>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        {/* 일기 내용 */}
        <div className={"content"}>{content}</div>
      </div>
      {/* 버튼, 수정 페이지로 이동 */}
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
