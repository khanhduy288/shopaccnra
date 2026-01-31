import { Link } from "react-router-dom";
import accounts from "../data/accounts";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🔥 SHOP ACC GAME</h1>

      <div className="grid">
        {accounts.map((acc) => (
          <div className="card" key={acc.id}>
            <img src={acc.images[0]} alt={acc.name} />

            <span className="badge">{acc.rank}</span>

            <h3>{acc.name}</h3>
            <p className="price">{acc.price.toLocaleString()}đ</p>

            <Link to={`/detail/${acc.id}`} className="btn">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
