import React from "react";
import  styles from '../style/navBar.module.css';
import DatePicker from '../utils/DatePicker'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h4>Busca ofertas en hoteles, casas y mucho más✨</h4>
      <div>
        <div>
          <select className={styles.select}>
            <option className={styles.options} value={"x"} selected>📌A donde vamos?</option>
            <option value={"0"}>📍Buenos Aires - AR</option>
            <option value={"1"}>📍Medellín - CO</option>
            <option value={"2"}>📍Punta Cana - PR</option>            
            <option value={"3"}>📍New York - EEUU</option>
            <option value={"4"}>📍Punta del Este - UY</option>
            <option value={"5"}>📍Rio de Janeiro - BR</option>
          </select>          
        </div>
        <div className={styles.dateDiv}>
          <DatePicker />
        </div>        
      </div>
      <Link to="/cards"><button className={styles.btnBuscar}>Buscar</button></Link>
    </nav>
  );
};

export default Navbar;
