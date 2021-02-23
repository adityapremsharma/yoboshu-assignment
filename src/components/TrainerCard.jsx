import React from "react";

import useSound from "use-sound";
import cardSound from "../media/sounds/1.wav";
import onClickSound from "../media/sounds/2.wav";
import mediaSound from "../media/sounds/3.wav";

const TrainerCard = ({
  img,
  name,
  experience,
  speciality,
  contact,
  price,
  theme
}) => {
  const [playCard] = useSound(cardSound);
  const [playOnClick] = useSound(onClickSound, { volume: 0.5 });
  const [playMedia] = useSound(mediaSound, { volume: 0.5 });

  return (
    <div
      className={`card-container ${
        theme === "light" ? "add-card-background" : null
      }`}
      onMouseEnter={playCard}
      onClick={playOnClick}
    >
      <div>
        <img className="profile-img" src={img} alt="#" />
        <div className="container-details">
          <h3 className="secondary-heading">{name}</h3>
          <p>Years: {experience} +</p>
          <p>Speciality: {speciality}</p>
        </div>
      </div>
      <div className="contact-container">
        <div>
          <i
            className="fab fa-instagram fa-2x trainer-contact"
            onMouseEnter={playMedia}
          ></i>
          <i
            className="fab fa-facebook-f fa-2x trainer-contact"
            onMouseEnter={playMedia}
          ></i>
          <i
            className="fab fa-snapchat-square fa-2x trainer-contact"
            onMouseEnter={playMedia}
          ></i>
          <h3 className="trainer-price">₹ {price} / week</h3>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
