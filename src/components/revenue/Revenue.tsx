import { useEffect, useReducer } from "react";
// import Header from "../header/Header";
import AdminService from "../services/AdminService";
import style from "./Revenue.module.scss";
import { revenueReducer} from "./Revenue.type";
import Button from "../button/Button";
import { useNavigate } from "react-router";


const Revenue = () => {

  const[state,dispatch]=useReducer(revenueReducer,{revenues:[]})

  const navigate=useNavigate()
  const getRevenues = async () => {
    try {
      const response = await AdminService.getAllRevenue();
        dispatch({type:"SETREVENUE",revenueList:response.restaurants})


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRevenues();
  }, []);

  return (
    <>
   <header>
    <h1>DISHDESK</h1>
        <Button onClick={()=>navigate(-1)}>go back</Button>
   </header>
      <main className={style.Main}>

        <div className={style.TableContainer}>
         
          <table className={style.Table}>

            <thead>
              <tr>
                <th>Hotel</th>
                <th>Revenue Cost (₹)</th>
              </tr>
            </thead>

            <tbody>
              {state.revenues.map((resto) => (
                <tr key={resto.restaurant_id}>
                  <td>{resto.restaurant_name}</td>
                  <td>{resto.total_revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
       
        </div>
        
      </main>
    </>
  );
};

export default Revenue;
