import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

// 감정 이모션 리스트
const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const Editor = () => {
  const emotionId = 1;
  return (
    <div className="Editor">
      {/* 날짜 선택 섹션 */}
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>

      {/* 감정 선택 섹션 */}
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* 좋은 방식은 아님 */}
          {/* <EmotionItem emotionId={1} emotionName={"완전 좋음"} />
          <EmotionItem emotionId={2} emotionName={"좋음"} />
          <EmotionItem emotionId={3} emotionName={"그럭저럭"} />
          <EmotionItem emotionId={4} emotionName={"나쁨"} />
          <EmotionItem emotionId={5} emotionName={"끔찍함"} /> */}
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>

      {/* 일기 작성 섹션 */}
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?" />
      </section>

      {/* 취소, 완료 버튼 섹션 */}
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
