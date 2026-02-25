import { getEmotionImage } from "../util/get-emotion-images";
import "./EmotionItem.css";

// 감정 선택 아이템 컴포넌트

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
    >
      {/* 감정 이미지 */}
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      {/* 감정 이름 */}
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
