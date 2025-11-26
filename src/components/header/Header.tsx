import { Link,  } from "react-router";
import style from "./Header.module.scss";
import Button from "../button/Button";
import type { HeaderProps } from "./Header.type";

const Header = ({ role,onSearch }: HeaderProps) => {



  return (
    <header className={style.Header}>
      <h1>DISHDESK</h1>

      <input type="search" placeholder="🔎 Search Restaurant" onChange={onSearch}/>

{role==='customer' &&(
  <div className={style.profileWrapper}>
            <Button className="material-symbols-outlined">
              <span className={style.profile}>account_circle</span>
            </Button>
            <div className={style.dropdown}>

              <Link to="/logout">Logout</Link>
            </div>
          </div>
        
)}


      {role === "owner" && (
        <div className={style.actions}>
          <Link to={"/addhotel"}>
            <Button>Add Hotel</Button>
          </Link>

          <div className={style.profileWrapper}>
            <Button className="material-symbols-outlined">
              <span className={style.profile}>account_circle</span>
            </Button>
            <div className={style.dropdown}>
         <Link to="/myrestaurant">My Resaturant</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </div>
      )}

      {role === "admin" && (
        <div className={style.actions}>
          <Link to={"/addowner"}>
            <Button>Add Owner</Button>
          </Link>
          <div className={style.profileWrapper}>
            <Button className="material-symbols-outlined">
              <span className={style.profile}>account_circle</span>
            </Button>
            <div className={style.dropdown}>
              <Link to="/addhotel">Add Hotel</Link>
              <Link to="/myrestaurant">My Restaurant</Link>
              <Link to="/revenue">See Revenue</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
