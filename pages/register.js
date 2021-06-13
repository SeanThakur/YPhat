import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styles from '../styles/Register.module.css'

const Register = () => {

    const [event, setEvent] = useState('personal')

    const handleRadioChange = (e) => {
        setEvent(e.target.value)
    }
    return (
        <div className={styles.register}>
            <div className={styles.registerHead}>
                <div className={styles.registerTitle}>
                    <a href="/">
                        <img 
                            src="/assets/images/login/logo.png"
                        />
                    </a>
                    <h3>
                        Create Your YPhat Account
                    </h3>
                    <h5>
                        Pray for The World
                    </h5>
                </div>
                <form
                    className={styles.registerForm}
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
                                // value={firstName}
                                // onChange={handleFirstNameChange}
                                variant="outlined"
                                className={styles.registerFormTextField}
                            />
                        </div>
                        <div className={styles.registerFormSmallRow}>
                            <TextField
                                id="lastName"
                                label="Last Name"
                                type="text"
                                placeholder="Last Name"
                                // value={lastName}
                                // onChange={handleLastNameChange}
                                variant="outlined"
                                className={styles.registerFormTextField}
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
                            // value={lastName}
                            // onChange={handleLastNameChange}
                            variant="outlined"
                            className={styles.registerFormTextField}
                        />
                    </div>
                    <div
                         className={styles.registerFormSmallFields}
                    >
                        <div className={styles.registerFormSmallRow}>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="Password"
                                // value={password}
                                // onChange={handlePasswordChange}
                                variant="outlined"
                                className={styles.registerFormTextField}
                            />
                        </div>
                        <div className={styles.registerFormSmallRow}>
                            <TextField
                                id="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm Password"
                                // value={confirmPassword}
                                // onChange={handleConfirmPasswordChange}
                                variant="outlined"
                                className={styles.registerFormTextField}
                            />
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
                                            // value={organizationType}
                                            // onChange={handleOrganizationTypeChange}
                                            label="Organization Type"
                                        >
                                            <MenuItem value="">
                                                <em>Choose Organization Type</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Charities</MenuItem>
                                            <MenuItem value={20}>Donation</MenuItem>
                                            <MenuItem value={30}>Temples</MenuItem>
                                        </Select>
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
                                        // value={lastName}
                                        // onChange={handleLastNameChange}
                                        variant="outlined"
                                        className={styles.registerFormTextField}
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
                                        // value={lastName}
                                        // onChange={handleLastNameChange}
                                        variant="outlined"
                                        className={styles.registerFormTextField}
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
                                            // value={password}
                                            // onChange={handlePasswordChange}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                        />
                                    </div>
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="postCode"
                                            label="Post Code"
                                            type="number"
                                            placeholder="Post Code"
                                            // value={confirmPassword}
                                            // onChange={handleConfirmPasswordChange}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
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
                                            // value={password}
                                            // onChange={handlePasswordChange}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                        />
                                    </div>
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="country"
                                            label="Country"
                                            type="text"
                                            placeholder="Country"
                                            // value={confirmPassword}
                                            // onChange={handleConfirmPasswordChange}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
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
                                            // value={password}
                                            // onChange={handlePasswordChange}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                        />
                                    </div>
                                    <div className={styles.registerFormSmallRow}>
                                        <TextField
                                            id="email2"
                                            label="Email"
                                            type="email"
                                            placeholder="Email"
                                            // value={confirmPassword}
                                            // onChange={handleConfirmPasswordChange}
                                            variant="outlined"
                                            className={styles.registerFormTextField}
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className={styles.registerFormBtnGroup}>
                        <a 
                            href="/login"
                            className={styles.registerFormSignIn}
                        >
                            Sign in
                        </a>
                        <Button 
                            variant="contained" 
                            color="primary"
                            className={styles.registerFormBtn}
                            type="submit"
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
