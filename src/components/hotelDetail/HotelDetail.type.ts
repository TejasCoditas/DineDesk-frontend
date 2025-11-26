export interface ReviewState {
  reviews: Review[];
}

export interface Review{
  avg_rating:number;
comment:string;
username:string
}


export type ReviewAction = { type: "SETREVIEWS"; reviewList: any[] };

export const reviewReducer = (
  state: ReviewState,
  action: ReviewAction
): ReviewState => {
  switch (action.type) {
    case "SETREVIEWS":
      return { ...state, reviews: action.reviewList };
  }
};
