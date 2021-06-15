import React, { useEffect, useState } from 'react'
import { Button, Divider, TextField } from '@material-ui/core'
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { setErrorClear, setLogin } from '../feature/auth/actions'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const error = useSelector(state => state.error);
    const auth = useSelector(state => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [Loginerror, setLoginError] = useState(null)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        dispatch(setLogin(data))
    }

    //Error Handling

    useEffect(() => {
        if(error) {
            setLoginError(error)
        }
    }, [error])

    //Redirects User To Main Page

    useEffect(() => {
        if(auth.isAuth === true) {
            router.push('/');
            dispatch(setErrorClear())
        }
    }, [auth])

    return (
        <div className={styles.login}>
            <div className={styles.loginHead}>
                <img 
                    src="/assets/images/login/logo.png" 
                />
                <form
                    className={styles.loginForm}
                    onSubmit={handleLoginSubmit}
                >
                    <TextField
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        variant="outlined"
                        className={styles.formTextField}
                        required
                    />
                    <TextField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        variant="outlined"
                        className={styles.formTextField}
                        required
                    />
                    {
                        <small className={styles.errorMessage}>
                            {
                                Loginerror !== null && Loginerror.message
                            }
                        </small>
                    }
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={styles.formBtn}
                        type="submit"
                        onSubmit={handleLoginSubmit}
                    >
                        {
                            auth.loading === true ? 'Loading...' :  "Login in"
                        }
                    </Button>
                </form>
                <div className={styles.forgetPassword}>
                    <Link
                        href="#"
                    >
                        Forgetten Password?
                    </Link>
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
                    onClick={() => router.push('/register')}
                >
                    Create New Account
                </Button>
            </div>
        </div>
    )
}

export default Login
