
type RatingAction = 
  | { type: "SET_RATING"; rate :number };

// Reducer function
export const ratingReducer = (state: number, action: RatingAction): number => {
  switch (action.type) {
    case "SET_RATING":
      return action.rate;
    default:
      return state;
  }
};


export interface RatingProps{
  rate:string
}