import Home from "../home/Home";

import Header from "../header/Header";

import { useReducer, useEffect } from "react";
import { hotelReducer, type Hotel } from "../home/Home.type";
import CustomerService from "../services/CustomerService";

const AdminScreen = () => {
  const [state, dispatch] = useReducer(hotelReducer, {
    hotelList: [],
    mainHotelList: [],
  });

  const getHotelList = async () => {
    try {
      const data = await CustomerService.getHotelData();
      dispatch({ type: "HOTELFETCH", hotelList: data, mainHotelList: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotelList();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const string = e.target.value.toLowerCase();

    const filteredList = state.mainHotelList.filter((hotel: Hotel) =>
      hotel.restaurant_name.toLowerCase().includes(string)
    );

    dispatch({ type: "HOTEL", hotelList: filteredList });
  };

  return (
    <>
      <Header role="admin" onSearch={handleSearch} />
      <Home hotelList={state.hotelList} />
    </>
  );
};

export default AdminScreen;
