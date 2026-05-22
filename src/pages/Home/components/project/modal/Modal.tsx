import { useState } from "react";
import "./css/Modal.css";

interface DetailModalProps {
  images: string[];
  title: string;
  description: string;
  onClose: () => void;
}

export default function Modal({
  images,
  title,
  description,
  onClose,
}: DetailModalProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          {/* LEFT */}
          <div className="modal-main-image">
            <img srcSet={activeImage} alt="preview" />
          </div>

          {/* RIGHT */}
          <div className="modal-side">
            <div className="modal-thumbnails">
              {images.map((img, i) => (
                <img
                  key={i}
                  srcSet={img}
                  className={img === activeImage ? "active" : ""}
                  onClick={() => setActiveImage(img)}
                  alt="thumb"
                />
              ))}
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="modal-desc">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
