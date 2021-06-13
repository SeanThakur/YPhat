import React, { useState } from 'react'
import { Button, Divider, TextField } from '@material-ui/core'
import styles from '../styles/Login.module.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginHead}>
                <img 
                    src="/assets/images/login/logo.png" 
                />
                <form
                    className={styles.loginForm}
                >
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        variant="outlined"
                        className={styles.formTextField}
                    />
                    <TextField
                        id="Password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        variant="outlined"
                        className={styles.formTextField}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={styles.formBtn}
                    >
                        Login in
                    </Button>
                </form>
                <div className={styles.forgetPassword}>
                    <a
                        href="#"
                    >
                        Forgetten Password?
                    </a>
                </div>
            </div>
            <Divider 
                variant="middle" 
                className={styles.loginDivider}
            />
            <div className={styles.loginBottom}>
                <Button 
                    variant="contained" 
                    color="primary"
                    className={styles.formBtn}
                >
                    Create New Account
                </Button>
            </div>
        </div>
    )
}

export default Login
