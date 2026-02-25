import { useEffect } from "react";

// 브라우저 탭 제목 변경 커스텀 훅

const usePageTitle = (title) => {
  useEffect(() => {
    // title의 태그 요소에서 배열의 첫번째 요소 선택
    const $title = document.getElementsByTagName("title")[0];
    // 전달 된 title 값으로 내부 텍스트 변경
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
