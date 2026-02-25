import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

// 일기 편집 컴포넌트

const Editor = ({ onSubmit, initData }) => {
  // 입력 폼의 상태
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  // 페이지 이동을 위한 네비게이트 함수
  const nav = useNavigate();
  // 기존 데이터 로드
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);
  // 통합 입력 이벤트 핸들러
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // 날짜입력은 문자열을 Date 객체로 변경
    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input, // 스프레드연산자
      [name]: value,
    });
  };
  // 저장버튼 클릭 이벤트 핸들러
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      {/* 날짜 선택 섹션 */}
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      {/* 감정 선택 섹션 */}
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* EmotionItem 순회하며 렌더링 */}
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              // 선택된 감정 판별하여 전달
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      {/* 일기 작성 섹션 */}
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>

      {/* 취소, 완료 버튼 섹션 */}
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
