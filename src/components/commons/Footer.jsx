import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import styles from '../style/footer.modules.css';

const Footer = () => {
    return (
        <footer>
        <p  className={styles.pFooter}>©2021 Digital Booking</p>
        <ul className={styles.listFooter}>
            <li><a href="https://facebook.com"><BsFacebook /></a></li>
            <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
            <li><a href="https://twitter.com"><BsTwitter /></a></li>
            <li><a href="https://instagram.com"><BsInstagram /></a></li>
        </ul>
    </footer>
    )
}

export default Footer