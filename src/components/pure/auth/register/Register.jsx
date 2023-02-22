import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../../style/register.module.css'

const Register = (props) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
        <h2>Crear cuenta</h2>
            <form className={styles.formRegistre} onSubmit={handleSubmit}>
                <label className={styles.labelRegistre1} htmlFor="name">Nombre</label>
                <input className={styles.inputRegistre1} value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Ingrese su nombre" />
                
                <label className={styles.labelRegistre2} htmlFor="surname">Apellido</label>
                <input className={styles.inputRegistre2} value={lastName} type="text" name="surname" onChange={(e) => setLastName(e.target.value)} id="surname" placeholder="Ingrese su apellido" />
                
                <label className={styles.labelRegistre3} htmlFor="email">Correo electrónico</label>
                <input className={styles.inputRegistre3} value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Ingrese su correo electrónico" id="email" name="email" />
                
                <label className={styles.labelRegistre4} htmlFor="password">Contraseña</label>
                <input className={styles.inputRegistre4} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingrese su contraseña" id="password" name="password" />

                <label className={styles.labelRegistre5} htmlFor="confirmPassword">Confirmar ontraseña</label>
                <input className={styles.inputRegistre5} value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="Repita su contraseña" id="confirmPassword" name="confirmPassword" aria-required/>
                
                <Link to="/Home"><button className={styles.btnRegistre} type="submit">Registrarse</button></Link>
            </form>
        <p className={styles.pRegistre}>¿Ya tienes una cuenta? <Link to="/Login">Iniciar sesión</Link></p>
</div>
    )
}

export default Register