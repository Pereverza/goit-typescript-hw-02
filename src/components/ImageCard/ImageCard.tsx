import React from "react";
import s from "./ImageCard.module.css";
import { UnsplashImage } from "../../types";

interface ImageCardProps {
  image: UnsplashImage;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image from Unsplash"}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
