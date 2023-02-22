import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../../style/login.module.css'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
                <div className={styles.divForm}>
                    <h2>Iniciar sesión</h2>
                    <form className={styles.formLogin} onSubmit={handleSubmit}>
                        <label className={styles.labelMail} htmlFor="email">Correo electrónico</label>

                        <input className={styles.inputMail} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Ingrese su email' id='email' name='email' />
                        
                        <label className={styles.labelPass} htmlFor="password">Contraseña</label>
                        
                        <input className={styles.inputPass} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id='password' name='password' />
                        
                        <Link to="/Home"><button className={styles.btnForm}>Ingresar</button></Link>
                    </form>
                    <p className={styles.pLogin}>¿Aún no tienes cuenta?<Link to="/Register"> Registrate</Link></p>
                </div>
        </main>
    )
}

export default Login