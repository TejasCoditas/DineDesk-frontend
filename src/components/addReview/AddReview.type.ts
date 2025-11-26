import { z } from "zod";

export interface Dishes {
  dish_id: number;
  dish_name: string;
}

export const orderDishSchema = z.object({
    
  dish_id: z.coerce.number(),
  quantity: z.coerce.number().max(10,"Please enter the Quantity upto 5"),
  dish_rating:z.coerce.number().min(0).max(5,"Please enter the Rating upto 5")
});



export type states = {
  dishList: Dishes[];
};

export type dishAction = { type: "SETDISHES"; dishList: Dishes[] };

export const dishReducer = (states: states, action: dishAction) => {
  switch (action.type) {
    case "SETDISHES":
      return { ...states, dishes: action.dishList };
  }
};



type RatingAction = 
  | { type: "SETRATING"; rate :number };


export const ratingReducer = ( action: RatingAction): number |string => {
  switch (action.type) {
    case "SETRATING":
      return action.rate;
   
  }
};

export type OrderDishSchema = z.infer<typeof orderDishSchema>;
