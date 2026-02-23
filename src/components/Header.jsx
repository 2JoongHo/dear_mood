// 헤더 컴포넌트

import "./Header.css";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
};

export default Header;
