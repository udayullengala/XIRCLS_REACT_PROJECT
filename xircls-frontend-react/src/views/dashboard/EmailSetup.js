import React, { useState } from "react"
import { Bold } from "react-feather"
import logo1 from '@src/assets/images/dashboard/gmail-tick.png'

const EmailSetup = () => {
    const [senderName, setSenderName] = useState("")
    const [senderEmail, setSenderEmail] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailPattern.test(email)
    }

    const handleNameChange = (e) => {
        const name = e.target.value
        setSenderName(name)
    }

    const handleEmailChange = (e) => {
        const email = e.target.value
        setSenderEmail(email)
        setIsValidEmail(validateEmail(email))
    }

    const handleSubmit = () => {
        if (senderName.trim() === "" || !isValidEmail) {
            setErrorMessage("Please enter all the details")
        } else {
            setErrorMessage("")
            setShowWelcomeMessage(true)
        }
    }

    return (
        <div>
            {!showWelcomeMessage ? (
                <div>
                    <div style={{ fontWeight: "bolder", fontSize: "30px", marginLeft: "400px", color: "black" }}>Add your sender information</div>
                    <div style={{ marginLeft: "385px", marginTop: "7px", color: "black" }}>Choose the sender name and email address that will appear in your</div>
                    <div style={{ marginLeft: "550px" }}>subscriber's inbox.</div>

                    <div style={{ marginTop: "30px", marginLeft: "380px" }}>
                        <div style={{ marginBottom: "5px", fontWeight: "bold", color: "black" }}>Sender Name</div>
                        <input type="text" placeholder="My Online Store" value={senderName} onChange={handleNameChange} style={{ width: "485px", paddingLeft: "10px", paddingTop: "2px", paddingBottom: "2px", color: "black" }} />

                        <div style={{ marginTop: "15px", marginBottom: "5px", fontWeight: "bold", color: "black" }}>Sender email address</div>
                        <input type="text" value={senderEmail} onChange={handleEmailChange} style={{ width: "485px", borderColor: isValidEmail ? "initial" : "red" }} />
                        {!isValidEmail && <div style={{ color: "red", marginTop: "5px", color: "red" }}>Please enter a valid email address</div>}
                        {errorMessage && <div style={{ color: "red", marginTop: "5px" }}>{errorMessage}</div>}
                    </div>

                    <input type="submit" value="Continue" onClick={handleSubmit} style={{ marginLeft: "600px", marginTop: "25px", background: "black", color: "white", paddingTop: "4px", paddingBottom: "4px", paddingRight: "10px", paddingLeft: "10px" }} />
                </div>
            ) : (
                <div>
                    <div style={{ marginLeft: "450px" }}><img style={{ width: "190px", height: "180px" }} src={logo1} alt="Logo" /></div>
                    <div style={{ fontWeight: "bolder", fontSize: "30px", marginLeft: "400px", color: "black" }}>Check your email</div>
                    <div style={{ marginLeft: "320px", marginTop: "7px", marginTop: "25px", color: "black" }}>To start using Klaviyo, activate your account with the link sent to</div>
                    <div style={{ marginLeft: "300px", marginTop: "45px", marginRight: "445px", color: "black" }}> <hr /> <div style={{ marginLeft: "20px", marginTop: "20px" }}>Didn't receive an email?</div></div>
                </div>
            )}
        </div>
    )
}

export default EmailSetup
