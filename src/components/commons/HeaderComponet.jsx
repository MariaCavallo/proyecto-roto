import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../../img/logo.jpg";
import styles from '../style/header.modules.css'
import { FiMenu } from "react-icons/fi"
import { FiX } from "react-icons/fi"

const HeaderComponet = () => {

  const [active, setActive] = useState('headerDiv');
    
  const showHeader = () => {
      setActive('header activeHeader')
  }

  const closeHeader = () => {
      setActive('headerDiv')
  }

  return (
    <div className={styles.divContainer}>
      <div>
        <Link to="/">
          <ul>
            <li>
              <img className={styles.logo} src={logo} alt="logo" width="75" height="55"/>
            </li>
            <li className={styles.liParrafo}>
              <p className={styles.parrafo}>Sentite como en tu hogar🏠</p>
            </li>
          </ul>
        </Link> 
      </div>
      <div>
        <ul>
          <div className={active}>
            <div className={styles.headerItem}>
              <li>            
                <Link to="/Register"><button className={styles.btnReg}>Registrarse</button></Link>
            </li>
            <li>
                <Link to="/Login"><button className={styles.btnSignin}>Iniciar sesión</button></Link>
            </li>
          </div>
          </div>
        </ul>
        <div onClick={closeHeader} className={styles.closeHeader}>
          <FiX className={styles.icon}/>
        </div>
        <div onClick={showHeader} className={styles.toggleHeader}>
          <FiMenu className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponet;
