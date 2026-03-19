import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/login.css';
import introImage from '../assets/intro.png';

const Login = () => {
    const [deliveryId, setDeliveryId] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // 1 = enter number, 2 = enter OTP
    const [currentTime, setCurrentTime] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        };

        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    // Step 1 → Send OTP
    const handleSendOTP = (e) => {
        e.preventDefault();

        if (deliveryId !== "8123456789") {
            alert("Use demo number: 8123456789");
            return;
        }

        console.log("OTP sent to:", deliveryId);
        setStep(2);
    };

    // Step 2 → Verify OTP
    const handleVerifyOTP = (e) => {
        e.preventDefault();

        if (otp === "1234") {
            localStorage.setItem("user", deliveryId);
            navigate("/dashboard");
        } else {
            alert("Invalid OTP. Use 1234");
        }
    };

    return (
        <div className="login-container">

            {/* Status Bar */}
            <div className="status-bar">
                <span>{currentTime}</span>
                <div className="status-icons">
                    <i className="fas fa-signal"></i>
                    <i className="fas fa-wifi"></i>
                    <i className="fas fa-battery-full"></i>
                </div>
            </div>

            {/* Illustration */}
            <div className="illustration-section">
                <div className="circle-bg">
                    <img
                        src={introImage}
                        alt="User Illustration"
                        className="user-illustration"
                    />
                </div>
            </div>

            {/* Form */}
            <div className="form-card">

                {step === 1 ? (
                    <form onSubmit={handleSendOTP}>
                        <div className="input-group">
                            <span className="country-code">+91</span>
                            <input
                                type="text"
                                placeholder="Enter delivery number"
                                value={deliveryId}
                                onChange={(e) => setDeliveryId(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="otp-button">
                            Send OTP
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOTP}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="otp-button">
                            Verify OTP
                        </button>
                    </form>
                )}

                <p className="signup-text">
                    Demo: 8123456789 | OTP: 1234
                </p>

                <div className="footer-links">
                    <p>By continuing, you agree to the</p>
                    <p>
                        <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
                    </p>
                </div>
            </div>

            <div className="home-indicator"></div>
        </div>
    );
};

export default Login;