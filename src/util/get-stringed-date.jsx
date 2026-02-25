// 날짜를 문자열로 저장(YYYY-MM-DD)

export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 월 또는 일이 10일 미만일 경우 앞에 0 붙이기
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  // 사이에 "-"를 붙여서 문자열 생성
  return `${year}-${month}-${date}`;
};
