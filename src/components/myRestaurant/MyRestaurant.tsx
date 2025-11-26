import { useEffect, useState } from "react";
import AdminService from "../services/AdminService";
import style from "./MyRestaurant.module.scss";
import Button from "../button/Button";
import { useNavigate } from "react-router";

const MyRestaurant = () => {
  const [hotelList, setHotelList] = useState<any[]>([]);

  const navigate = useNavigate();

  const getmyRestaurants = async () => {
    try {
      const response = await AdminService.getMyRestaurants();
      console.log(response, "my resto");
      setHotelList(response.my_restaurants);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getmyRestaurants();
  }, []);

  return (
    <main className={style.Main}>
      <Button onClick={() => navigate(-1)}>GO back</Button>
      <div className={style.CardContainer}>
        {hotelList.map((hotel) => (
          <div key={hotel.restaurant_id} className={style.Card}>
            <img
              src={hotel.image_url}
              alt={hotel.restaurant_name}
              className={style.Image}
            />
            <div className={style.Info}>
              <h2 className={style.Name}>{hotel.restaurant_name}</h2>
              <p className={style.Rating}>⭐ {hotel.averageRating}</p>
              <p className={style.Address}>{hotel.address}</p>
              <Button>Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyRestaurant;
