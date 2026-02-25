import "./Header.css";

// 헤더 컴포넌트

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Header">
      {/* 왼쪽: 뒤로가기 */}
      <div className="header_left">{leftChild}</div>
      {/* 중앙: 제목, 날짜 */}
      <div className="header_center">{title}</div>
      {/* 오른쪽: 수정, 삭제 등 */}
      <div className="header_right">{rightChild}</div>
    </div>
  );
};

export default Header;
