import { useLocation, useNavigate } from "react-router";
import style from "./HotelDetail.module.scss";
import Button from "../button/Button";
import CustomerService from "../services/CustomerService";
import { useEffect, useReducer} from "react";
import { reviewReducer } from "./HotelDetail.type";

const HotelDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const hotel = state.hotel;
  const restaurant_id = hotel.restaurant_id;

  const onAddReview = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate("/reviewform", { state: { restaurant_id } });
    }
  };
    const [reviewState, dispatch] = useReducer(reviewReducer, {reviews: [],

  });


  const getAllReviews = async () => {
    try {
      const reviews = await CustomerService.getReviewsByHotel(restaurant_id);
   dispatch({type:"SETREVIEWS",reviewList:reviews})
      console.log(reviews,"reviewssss")
      return reviews;
    } catch (error) {}
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <>
      <header className={style.Header}>
        <h1>DISHDESK</h1>
        <Button onClick={onAddReview}>Add Review</Button>
      </header>

      <div className={style.DetailPage}>
        <div className={style.SideBar}>
          <div className={style.DetailContainer}>
            <img
              src={hotel.image_url}
              alt={hotel.restaurant_name}
              className={style.Image}
            />
            <div className={style.Info}>
              <h1>{hotel.restaurant_name}</h1>
              <p className={style.Rating}>⭐ {hotel.rating}</p>
              <p className={style.Address}>{hotel.address}</p>
            </div>
          </div>
          <Button onClick={() => navigate('/')}>Go Back</Button>
        </div>

        <div className={style.ReviewSection}>
          {reviewState.reviews.map((review) => {
            return (
              <div className={style.Review}>
                <h3>{review.username}</h3>
                <h4>{review.avg_rating}⭐</h4>
                <h4 className={style.Comment}>{review.comment}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HotelDetail;
