import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-overlay">
        <Link to="/" className="header-logo">
          SHOP ACC GAME
        </Link>
        <p className="header-sub">
          Uy tín • Nhanh gọn • Giá tốt
        </p>
      </div>
    </header>
  );
}

export default Header;
