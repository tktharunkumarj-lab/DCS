import React from "react";
import '../styles/Policy.css';
import {
  MdHome,
  MdAttachMoney,
  MdPerson,
  MdSecurity,
  MdFlashOn,
  MdPayments,
  MdReport,
  MdVerifiedUser,
  MdInfo
} from "react-icons/md";

const Policy = () => {
  return (
    <div className="policy-container">

      {/* Header */}
      <div className="policy-header">
        <h2>Policy & Conditions</h2>
      </div>

      {/* Content */}
      <div className="policy-content">

        <div className="policy-section">
          <div className="section-title">
            <MdSecurity className="icon blue" />
            <h3>Coverage Scope</h3>
          </div>
          <p>
            Coverage is provided for food delivery riders based on predefined
            environmental and social triggers such as weather disruptions,
            protests, and abnormal delivery delays.
          </p>
        </div>

        <div className="policy-section">
          <div className="section-title">
            <MdFlashOn className="icon purple" />
            <h3>Parametric Trigger Mechanism</h3>
          </div>
          <p>
            Payouts are activated automatically when trigger conditions are met
            using real-time data from weather, traffic, and public events.
          </p>
        </div>

        <div className="policy-section">
          <div className="section-title">
            <MdPayments className="icon green" />
            <h3>Automatic Payouts</h3>
          </div>
          <p>
            Compensation is processed instantly without manual claims, reducing
            delays and ensuring quick financial support.
          </p>
        </div>

        <div className="policy-section">
          <div className="section-title">
            <MdReport className="icon orange" />
            <h3>Limitations</h3>
          </div>
          <p>
            Only predefined trigger conditions are covered. Individual or
            unverified incidents are excluded from payouts.
          </p>
        </div>

        <div className="policy-section">
          <div className="section-title">
            <MdVerifiedUser className="icon red" />
            <h3>Anti-Fraud Measures</h3>
          </div>
          <p>
            Multi-layer verification ensures authenticity using location data,
            behavior tracking, and anomaly detection.
          </p>
        </div>

        <div className="policy-section">
          <div className="section-title">
            <MdPerson className="icon teal" />
            <h3>User Responsibility</h3>
          </div>
          <p>
            Riders must maintain accurate data and follow platform guidelines.
            Misuse may lead to suspension.
          </p>
        </div>

        <div className="policy-section">
          <div className="section-title">
            <MdInfo className="icon gray" />
            <h3>Policy Updates</h3>
          </div>
          <p>
            Terms and trigger conditions may evolve based on real-world risk
            patterns and system improvements.
          </p>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        <div className="nav-item">
          <MdHome size={20} />
          <span>Dashboard</span>
        </div>

        <div className="nav-item">
          <MdAttachMoney size={20} />
          <span>Pricing</span>
        </div>

        <div className="nav-item active">
          <MdPerson size={20} />
          <span>Policy</span>
        </div>
      </div>

      <div className="home-indicator"></div>
    </div>
  );
};

export default Policy;