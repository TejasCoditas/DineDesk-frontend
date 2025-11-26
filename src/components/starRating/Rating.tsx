// import { useReducer } from "react";
// import { ratingReducer, type RatingProps } from "./Rating.type";
// import style from './Rating.module.scss'

// const Rating = ({rate}:RatingProps) => {
//   const [rating, dispatch] = useReducer(ratingReducer, 0);

//   return (
//     <div className={style.Container}>
//       <input
//         type="range"
//         min="0"
//         max="5"
//         step="1"
//         value={rating}
//         onChange={(e) =>
//           dispatch({ type: "SET_RATING", rate:(e.target.value) })
//         }
//       />
//       <h4>Rating: ⭐{rating}</h4>
//     </div>
//   );
// };

// export default Rating;
