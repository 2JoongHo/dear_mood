import { use } from "react";
import { getEmotionImage } from "../util/get-emotion-images";
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      {/* 감정 이미지 */}
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      {/* 인포 */}
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className={"created_date"}>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className={"content"}>{content}</div>
      </div>
      {/* 버튼 */}
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
