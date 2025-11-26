
import { useNavigate } from "react-router";

import style from "./Home.module.scss";
import Button from "../button/Button";

import {  type HomeProps, type Hotel } from "./Home.type";

const Home = ({hotelList}:HomeProps) => {
  const navigate = useNavigate();
 
  const handleCardClick = (hotel: Hotel) => {
    navigate(`/hotel/${hotel.restaurant_id}`, {
      state: { hotel },
    });
  };

  return (
    <main className={style.Main}>
      <div className={style.CardContainer}>
        {hotelList?.map((hotel) => (
          <div
            key={hotel.restaurant_id}
            className={style.Card}
            onClick={() => handleCardClick(hotel)}
          >
            <img
              src={hotel.image_url}
              alt={hotel.restaurant_name}
              className={style.Image}
            />
            <div className={style.Info}>
              <h2 className={style.Name}>{hotel.restaurant_name}</h2>
              <p className={style.Rating}>⭐ {hotel.averageRating}</p>
              <p className={style.Address}>{hotel.address}</p>
              <Button>Add Review</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
