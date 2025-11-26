
 export interface HomeProps {
  hotelList?: Hotel[] | undefined;
}

export interface Hotel{
  averageRating: number;
  restaurant_id:number,
  restaurant_name:string,
  address:string,
  rating:number,
  image_url:string

}

 export type HotelState = {
  hotelList: Hotel[];
  mainHotelList:Hotel[];

};




export const hotelReducer = (state:HotelState, action:any) => {
  switch (action.type) {
    case "HOTELFETCH":
      return {
        ...state,
        hotelList: action.hotelList,
        mainHotelList: action.mainHotelList, 
      };
    case "HOTEL":
      return {
        ...state,
        hotelList: action.hotelList,
      };
    default:
      return state;
  }
};