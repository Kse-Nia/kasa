import React, { FC } from "react";

interface BannerProps {
  picture: string;
  text: string;
}

const Banner: FC<BannerProps> = ({ picture, text }) => {
  return (
    <section className="banner_section">
      <img className="banner_picture" src={picture} alt="banner" />
      {text && <h1 className="banner_text">{text}</h1>}
    </section>
  );
};

export default Banner;
