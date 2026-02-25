import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-images";
import { emotionList } from "../util/constants";

// 일기 상세보기 컴포넌트

const Viewer = ({ emotionId, content }) => {
  // list에서 ID와 일치하는 감정 객체 찾기
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId),
  );

  return (
    <div className="Viewer">
      {/* 오늘의 감정 */}
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>

      {/* 오늘의 일기 */}
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          {/* 일기 내용 렌더링 */}
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
