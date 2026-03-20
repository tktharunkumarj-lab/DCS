import React, { useState } from "react";
import '../styles/Policy.css';
import {
  MdHome,
  MdAttachMoney,
  MdPerson,
  MdKeyboardArrowDown,
  MdEco,
  MdBolt,
  MdAutoGraph
} from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Add this import
const Policy = () => {
  const [planType, setPlanType] = useState("daily");
  const [active, setActive] = useState(null);
const navigate = useNavigate();
  const pricing = {
    daily: [30, 40, 55],
    biweekly: [175, 195, 210]
  };

  const plans = [
    {
      name: "Basic Premium",
      icon: <MdEco className="plan-icon green" />,
      benefits: [
        "Coverage for mild weather disruptions",
        "Basic payout triggers",
        "Limited risk alerts",
        "Standard processing priority",
        "Weekly insights",
        "Basic support"
      ]
    },
    {
      name: "Standard Premium",
      icon: <MdBolt className="plan-icon orange" />,
      benefits: [
        "Coverage for moderate risks",
        "Enhanced trigger accuracy",
        "Real-time alerts",
        "Faster payouts",
        "Heatmap insights",
        "Priority support"
      ]
    },
    {
      name: "Dynamic Premium",
      icon: <MdAutoGraph className="plan-icon purple" />,
      benefits: [
        "Full environmental + social coverage",
        "Dynamic risk adjustment",
        "Instant payouts",
        "AI-based alerts",
        "Live heatmap tracking",
        "Top-tier support"
      ]
    }
  ];
 const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="policy-container">

      {/* HEADER */}
      <div className="policy-header">
        <h2>Policy Section</h2>
      </div>

      {/* WHITE CONTENT */}
      <div className="policy-content">

        {/* TITLE */}
        <div className="policy-title">
          <h3>Premium Plans</h3>
        </div>

        {/* TOGGLE */}
        <div className="toggle-switch">
          <div className={`switch ${planType === "biweekly" ? "right" : ""}`}>
            <div className="option" onClick={() => setPlanType("daily")}>
              Daily
            </div>
            <div className="option" onClick={() => setPlanType("biweekly")}>
              Biweekly
            </div>
          </div>
        </div>

        {/* PLANS */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className="plan-card"
            onClick={() => setActive(active === index ? null : index)}
          >
            <div className="plan-header">

              <div className="plan-left">
                {plan.icon}
                <h3>{plan.name}</h3>
              </div>

              <div className="plan-right">
                <p>₹{pricing[planType][index]}</p>
                <MdKeyboardArrowDown
                  className={active === index ? "rotate" : ""}
                />
              </div>

            </div>

            {active === index && (
              <ul className="benefits">
                {plan.benefits.map((b, i) => (
                  <li key={i}>{i + 1}. {b}</li>
                ))}
              </ul>
            )}

          </div>
        ))}

      </div>

      {/* NAVBAR */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={() => handleNavigation('/dashboard')}>
          <MdHome size={20} />
          <span>Dashboard</span>
        </div>

        <div className="nav-item" onClick={() => handleNavigation('/payment')}>
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