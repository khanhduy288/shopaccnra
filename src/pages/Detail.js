import { useParams } from "react-router-dom";
import { useState } from "react";
import accounts from "../data/accounts";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const acc = accounts.find((a) => a.id === Number(id));

  const [zoomImg, setZoomImg] = useState(null);
  const [showPay, setShowPay] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!acc) return <h2>Không tìm thấy acc</h2>;

  const transferNote = `MUA ${acc.name} - SĐT`;

  const handleCopy = () => {
    navigator.clipboard.writeText(transferNote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="detail-container">
      <h1>{acc.name}</h1>
      <p className="rank">🏷 Rank: {acc.rank}</p>
      <p className="price">{acc.price.toLocaleString()}đ</p>

      {/* GALLERY */}
      <div className="gallery">
        {acc.images.map((img, i) => (
          <img key={i} src={img} alt="" onClick={() => setZoomImg(img)} />
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="action-buttons">
        <button className="buy-btn" onClick={() => setShowPay(true)}>
          💳 Mua ngay
        </button>

        <a
          className="zalo-btn"
          href="https://zalo.me/0918110368"
          target="_blank"
          rel="noreferrer"
        >
          💬 Nhắn Zalo hỏi acc
        </a>
      </div>

      {/* ZOOM IMAGE */}
      {zoomImg && (
        <div className="modal" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="" />
        </div>
      )}

      {/* PAYMENT MODAL */}
      {showPay && (
        <div className="modal" onClick={() => setShowPay(false)}>
          <div className="pay-box" onClick={(e) => e.stopPropagation()}>
            <h2>💳 Thanh toán</h2>

            <img
              src="/images/qr-bank.png"
              alt="QR thanh toán"
              className="qr-img"
            />

            <p><strong>MB BANK - STK:</strong> 6590102038888</p>
            <p><strong>Chủ TK:</strong> NGUYEN BA DUY KHANH</p>

            {/* COPY NOTE */}
            <div className="note-box">
              <strong>Nội dung chuyển khoản:</strong>

              <div className="copy-row">
                <span>{transferNote}</span>

                <button className="copy-btn" onClick={handleCopy}>
                  📋
                </button>
              </div>

              {copied && <small className="copied">✔ Đã copy</small>}
            </div>

            <p className="guide">
              Sau khi chuyển khoản, vui lòng <strong>chụp bill</strong> và gửi
              qua Zalo để admin xác nhận và bàn giao acc.
            </p>

            <button className="close-btn" onClick={() => setShowPay(false)}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
