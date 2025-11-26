export interface RestaurantRevenue {
  restaurant_id: number;
  restaurant_name: string;
  total_revenue: number;
}



export interface RevenueState {
  revenues: RestaurantRevenue[];
}

export type RevenueAction = 
  | { type: "SETREVENUE"; revenueList:RestaurantRevenue[] }; 


export const revenueReducer = (state: RevenueState, action: RevenueAction): RevenueState => {
  switch (action.type) {
    case "SETREVENUE":
    
      return { ...state, revenues: action.revenueList };

  }
};
