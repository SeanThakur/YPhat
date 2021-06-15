import { Button, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Register.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setRegister, setErrorClear  } from '../feature/auth/actions'

const Register = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    // const error = useSelector(state => state.error);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [orgEmail, setOrgEmail] = useState('')
    const [orgName, setOrgName] = useState('')
    const [orgType, setOrgType] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [country, setCountry] = useState('')

    const [event, setEvent] = useState('personal')

    const [passwordValidationError, setPasswordValidationError] = useState(null)

    const handleRadioChange = (e) => {
        setEvent(e.target.value)
    }

    useEffect(() => {

        if(password !== confirmPassword) {
            setPasswordValidationError('Password not matched.')
        }

        if(password === confirmPassword) {
            setPasswordValidationError(null)
        }

    }, [confirmPassword])

    const handleRegisterSubmit = (e) => {
        e.preventDefault()

        if(event === 'personal') {

            if(password === confirmPassword) {

                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: '',
                    address: '',
                    city: '',
                    sate: '',
                    country: '',
                    pin: '',
                    gender: 'static',
                    avatar: '',
                    latitude: '',
                    longitude: '',
                    password: password,
                    organisationInfo: {
                        type: '',
                        name: '',
                        address: '',
                        city: '',
                        sate: '',
                        country: '',
                        pin: '',
                        email: '',
                        phone: ''
                    }
                }
        
                dispatch(setRegister(data, router))
                dispatch(setErrorClear())
        
                // console.log(data)
            }

        } else if(event === 'organization') {
            
            if(password === confirmPassword  && orgType.length > 0) {

                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    address: address,
                    city: city,
                    sate: state,
                    country: country,
                    pin: pinCode,
                    gender: 'static',
                    avatar: '',
                    latitude: '',
                    longitude: '',
                    password: password,
                    organisationInfo: {
                        type: orgType,
                        name: orgName,
                        address: address,
                        city: city,
                        sate: state,
                        country: country,
                        pin: pinCode,
                        email: orgEmail,
                        phone: phone
                    }
                }
        
                dispatch(setRegister(data, router))
                dispatch(setErrorClear())
        
                // console.log(data)
            }

        }

    }

    return (
        <div className={styles.register}>
            <div className={styles.registerHead}>
                <div className={styles.registerTitle}>
                    <Link 
                        href="/"
                    >
                        <img 
                            src="/assets/images/login/logo.png"
                            className={styles.registerImage}
                        />
                    </Link>
                    <h3>
                        Create Your YPhat Account
                    </h3>
                    <h5>
                        Pray for The World
                    </h5>
                </div>
                <form
                    className={styles.registerForm}
                    onSubmit={handleRegisterSubmit}
                >
                    <div
                        className={styles.registerFormSmallFields}
                    >
                        <div className={styles.registerFormSmallRow}>
                            <TextField
                                id="firstName"
                                label="First Name"
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                variant="outlined"
                                className={styles.registerFormTextField}
                                required
                            />
                        </div>
                        <div className={styles.registerFormSmallRow}>
                            <TextField
                                id="lastName"
                                label="Last Name"
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                variant="outlined"
                                className={styles.registerFormTextField}
                                required
                            />
                        </div>
                    </div>
                    <div
                        className={styles.registerFormFullFields}
                    >
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            className={styles.registerFormTextField}
                            required
                        />
                    </div>
                    {/* {
                        <small className={styles.registerFormEmailAlert}>
                            {
                                error?.message
                            }
                        </small>
                    } */}
                    <div
                         className={styles.registerFormSmallFields}
                    >
                        <div className={styles.registerFormSmallRow}>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                variant="outlined"
                                className={styles.registerFormTextField}
                                required
                            />
                        </div>
                        <div className={styles.registerFormSmallRow}>
                            <TextField
                                id="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                variant="outlined"
                                className={styles.registerFormTextField}
                                required
                            />
                            {
                                <small className={styles.registerFormConfirmPasswordAlert}>
                                    {
                                        passwordValidationError && passwordValidationError
                                    }
                                </small>
                            }
                        </div>
                    </div>
                    <small className={styles.registerFormPasswordAlert}>
                        Use  8 or more characters with a mix of letters, numbers & symbols
                    </small>
                    <div className={styles.registerFormRadioComp}>
                        <RadioGroup value={event} onChange={handleRadioChange} className={styles.registerFormRadio}>
                            <FormControlLabel value="personal" control={<Radio color="primary" />} label="Personal" />
                            <FormControlLabel value="organization" control={<Radio color="primary" />} label="Organization" />
                        </RadioGroup>
                        {
                            event === 'organization' && 
                            <>
                                <div
                                    className={styles.registerFormFullFields}
                                >
                                    <FormControl variant="outlined" className={styles.registerSelectFormControl}>
                                        <InputLabel>Organization Type</InputLabel>
                                        <Select
                                            value={orgType}
                                            onChange={(e) => setOrgType(e.target.value)}
                                            label="Organization Type"
                                            required={orgType === ""}
                                        >
                                            <MenuItem value="">
                                                <em>Choose Organization Type</em>
                                            </MenuItem>
                                            <MenuItem value="charity">Charities</MenuItem>
                                            <MenuItem value="veg_shop">Vegan Shop</MenuItem>
                                            <MenuItem value="veg_restaurent">Vegan Restaurent</MenuItem>
                                            <MenuItem value="temple">Buddhist Temple,Monastery</MenuItem>
                                            <MenuItem value="travel_agent">Buddhist Temple Tour-Travel Agent</MenuItem>
                                        </Select>
                                        <FormHelperText>Required</FormHelperText>
                                    </FormControl>
                                </div>
                                <div
                                    className={styles.registerFormFullFields}
                                >
                                    <TextField
                                        id="orgName"
                                        label="Organization Name"
                                        type="text"
                                        placeholder="Organization Name"
                                        value={orgName}
                                        onChange={(e) => setOrgName(e.target.value)}
                                        variant="outlined"
                                        className={styles.registerFormTextField}
                                        required={event === 'organization'}
                                    />
                                </div>
                                <div
                                    className={styles.registerFormFullFields}
                                >
                                    <TextField
                                        id="address"
                                        label="Address"
                                        type="text"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        variant="outlined"
                                        className={styles.registerFormTextField}
                                        required={event === 'organization'}
                                    />
                                </div>
                                <div
                                    className={styles.registerFormSmallFields}
                                >
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="city"
                                            label="City"
                                            type="text"
                                            placeholder="City"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                            required={event === 'organization'}
                                        />
                                    </div>
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="postCode"
                                            label="Post Code"
                                            type="number"
                                            placeholder="Post Code"
                                            value={pinCode}
                                            onChange={(e) => setPinCode(e.target.value)}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                            required={event === 'organization'}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={styles.registerFormSmallFields}
                                >
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="state"
                                            label="State"
                                            type="text"
                                            placeholder="State"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                            required={event === 'organization'}
                                        />
                                    </div>
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="country"
                                            label="Country"
                                            type="text"
                                            placeholder="Country"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                            required={event === 'organization'}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={styles.registerFormSmallFields}
                                >
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="number"
                                            label="Number"
                                            type="number"
                                            placeholder="Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                            required={event === 'organization'}
                                        />
                                    </div>
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="email2"
                                            label="Email"
                                            type="email"
                                            placeholder="Email"
                                            value={orgEmail}
                                            onChange={(e) => setOrgEmail(e.target.value)}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                            required={event === 'organization'}
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className={styles.registerFormBtnGroup}>
                        <Link 
                            href="/login"
                            className={styles.registerFormSignIn}
                        >
                            Sign in
                        </Link>
                        <Button 
                            variant="contained" 
                            color="primary"
                            required
                            className={styles.registerFormBtn}
                            type="submit"
                            onSubmit={handleRegisterSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
            <div className={styles.registerBottom}>
                <img 
                    src="/assets/images/register/logo.png"
                />
                <span>
                    For peace and happiness
                </span>
            </div>
        </div>
    )
}

export default Register
