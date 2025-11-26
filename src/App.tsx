import React, { useReducer, useEffect } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CustomerService from './components/services/CustomerService';
import { hotelReducer, type Hotel } from './components/home/Home.type';



const App = () => {
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

  
    const filteredList = state.mainHotelList.filter((hotel:Hotel) =>
      hotel.restaurant_name.toLowerCase().includes(string)
    );

    
    dispatch({ type: "HOTEL", hotelList: filteredList });
  };

  return (
    <>
      <Header role={null} onSearch={handleSearch} />
      <Home hotelList={state.hotelList} />
    </>
  );
};

export default App;   