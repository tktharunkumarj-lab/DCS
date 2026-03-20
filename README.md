**PACT – Parametric Assurance & Coverage Trust**

**1\. Problem Overview & System Architecture**

### **1.1 Background: Gig Economy & Income Instability**

The gig economy has transformed modern work by offering flexibility and independence. However, this flexibility comes at the cost of income stability.

Food delivery gig workers operate in an environment where their earnings are highly volatile, with no guaranteed minimum income or financial safety net. Their ability to earn is directly tied to real-time external conditions and it heavily depends on peak-times making them one of the most vulnerable segments in the gig economy.

### **1.2 Persona Justification & Key Challenges**  

We chose food delivery workers as our primary persona due to the high frequency and diversity of disruptions affecting their income. 

**Key characteristics:** 

* No fixed working hours (fully flexible, demand-driven work)

* Earnings depend on completed deliveries, not time spent

* Strong dependency on platform availability and restaurant operations

* High exposure to environmental and urban conditions

#### **Demand & Operational Dependency**

* Peak-hour dependency increases income vulnerability

* Demand is heavily concentrated during lunch and dinner slots

* Platform outages instantly halt income flow

* Supply chain issues in cooking ingredients reduce available deliveries

#### **Environmental Disruptions**

* Heatwaves significantly reduce working hours  
* Heavy rains reduce mobility, increase delays, and lower delivery completion  
* Extreme events (floods, cyclones) can completely stop operations

#### **Platform & System Constraints**

* Restaurant delays reduce delivery completion rates

* High wait times reduce effective earnings during peak hours

* Sudden policy changes or penalties affect worker participation

### **1.3 Persona Based Scenarios**

 **1\. Dinner Rush App Outage**

 Hybrid ML models detect outages using app status signals \+ anomalies.  
 Explainable AI \+ GenAI explains income loss during peak hours.  
 Decision engine triggers payout with full transparency.

**2\. Heavy Rain During Active Shift**

Hybrid ML \+ weather APIs detect rainfall severity in real time.  
 NLP \+ APIs validate event across multiple sources.  
 Explainable AI justifies payout based on rider activity.

**3\. Localized Flood in High-Demand Zone**

 Geo-based validation combined with ML detects localized impact.  
 News verification via NLP \+ web scraping confirms disruption.  
 Heatmap visualizes affected zones for selective payouts.

**4\. Fake Claim Attempt by Rider**

 NLP \+ APIs find no supporting evidence for claimed event.  
 Hybrid ML fraud detection flags behavioral inconsistency.  
 Explainable AI provides clear rejection reasoning.

**5\. City-Wide Disruption (Market Crash Scenario)**

 Multi-source validation (news \+ APIs \+ models) confirms large event.  
 The backend decision system applies caps and tiered payouts.  
 Cryptographic trust layer ensures transparent, auditable payouts.

### **1.4 Solution & System Architecture Overview**

To address these challenges, PACT – Parametric Assurance & Coverage Trust introduces a parametric insurance platform for gig workers, designed to provide real-time, data-driven income protection.

Instead of relying solely on traditional claim-based systems, PACT continuously monitors real-world signals, identifies disruption events, evaluates their impact on earnings, and ensures timely compensation through a hybrid model of automatic triggers and request-based validation.

**System Architecture Diagram**

### **System Architecture Explanation**

PACT follows a multi-layered architecture integrating real-time data processing, predictive intelligence, and secure financial execution:

Data Input Layer

* Weather APIs (rainfall, heatwaves, cyclones)

* Government alerts and public safety notifications

* News feeds and social signals

* Platform activity logs (orders, outages, demand trends)

Event Detection Engine

* Processes real-time data streams

* Identifies and classifies disruption events

* Assigns severity levels based on predefined thresholds

Risk & Prediction Layer

* Predicts disruption probability based on time, location, and environmental conditions

* Estimates expected earnings using historical behavioral patterns

* Detects real-time deviations in income

Payout Engine

* Computes compensation based on:

  * expected earnings

  * duration of disruption

  * severity of event

* Applies policy rules such as caps, multipliers, and eligibility conditions

* Initiates automated payouts or flags cases for manual review

#### User Interface Layer (Mobile App & Dashboard)

* Displays live earnings and risk indicators

* Shows active triggers and alert notifications

* Provides payout summaries and request options

#### Fraud Detection & Trust Layer

* Ensures GPS and activity consistency

* Detects behavioral anomalies and misuse patterns

* Maintains integrity through secure identity verification and audit mechanisms

**Agile Model** 

Our app follows a one and a half month Agile development cycle divided into three fifteen day sprints aligned with the project phases, with initial planning included at the start rather than as a separate sprint.

Phase 1 begins with two days of planning where the product backlog is created, acceptance criteria are defined, story points are estimated, and risks such as delivery platform API dependency and Aadhaar sandbox access are identified. This is followed by foundational development including signup, identity verification, and platform linking, with daily standups to track progress and a sprint review to validate onboarding functionality.

Phase 2 focuses on building the core parametric engine, including weather and news API integration, dynamic premium calculation with reasoning, condition tracking, and automatic payout logging. Initially, hardcoded thresholds are used as a stability measure before transitioning to API-driven values.

Phase 3 emphasizes system refinement, adding fraud detection, dashboard features, mobile testing, and an ethical audit on data and fairness. The cycle concludes with a retrospective that documents limitations, future improvements, and key decisions for transparency.

**2\. Literature Review and Domain Insights**

**Key Observations:**

Traditional indemnity-based insurance averages 299 days to process claims with a 37.8% rejection rate, making it functionally useless for daily-wage workers \[3\], while parametric insurance delivers funds within days by triggering payouts automatically when a measurable threshold is crossed \[4\]. Cryptographic audit trails and tamper-evident data handling are non-negotiable in any parametric system given its complete dependence on external data pipelines \[1\]\[2\], and instant payments function as a structural financial intervention that prevents debt cycles for low-income populations \[7\]. Cross-referenced multi-source news classification outperforms single-feed detection for real-time event triggering \[5\]\[6\], yet gig delivery workers in India earning ₹600–700 per day remain entirely unserved by any insurance product, facing weather exposure, physical risk, and platform suspension vulnerability with zero financial protection \[8\]\[9\]\[10\], where a single malicious complaint triggers immediate account deactivation with no resolution pathway \[10\].

**Research Gap Identified**

1. No existing work addresses parametric insurance applied to gig workers specifically  all prior work focuses on agriculture, fisheries, and natural disaster contexts  
2. Existing parametric frameworks only capture environmental triggers  none account for platform-level income loss from account suspension, algorithmic penalty, or complaint-based deactivation  
3. No existing parametric architecture incorporates dynamic premium pricing based on a worker's daily behavioural patterns like cancellation rate and order history  
4. No prior work addresses differentiated trigger thresholds for vulnerable subpopulations like pregnant or disabled workers  
5. The explainability gap no reviewed parametric insurance system includes a mechanism to communicate payout decisions in plain language to low-literacy users  
6. News verification literature addresses fake news detection generally but never applies it to insurance trigger verification specifically, leaving the basis risk question open  
7. GigShield addresses all of these gaps simultaneously platform-linked triggers, behavioural premium pricing, vulnerable worker thresholds, explainable AI, and NLP-based event verification in a single unified system

**3\. Insurance Policy Design & Payout Framework**

PACT’s parametric insurance model is designed to compensate workers based on actual income disruption, rather than just the occurrence of an event.

## **3.1 Policy Components**

* **Base Coverage:**  
   Weekly micro-insurance aligned with the worker’s average earnings profile

* **Hourly Compensation Cap:**  
   A maximum payout per hour of disruption, derived from expected income

* **Event-Based Multipliers:**  
   Dynamic multipliers based on:

  * Environmental events (rainfall, floods, heatwaves)

  * Operational disruptions (platform outages, restaurant closures)

  * Social events (curfews, strikes)

* **Location Sensitivity:**  
   Geo-segmented policies to ensure accurate and region-specific coverage

**Eligibility & Rules**

* Workers must maintain at least 50% activity level in the previous week  
* Events must occur within the worker’s operational geo-fenced region  
* Verified income deviation thresholds must be met  
* If prior alerts were issued and ignored, payouts may be partially reduced

**3.2 Premium Calculation**

Around 60% of gig workers experience income volatility, leading to mild to severe income losses. Calamities and system outages account for approximately 10–20% of these losses. The average daily earnings of a gig worker range between ₹600–₹700.  
Based on this data, the premium model is designed such that if 10–15 users receive full reimbursement totaling around ₹7,500, the cost is distributed across 100 users, resulting in an affordable weekly premium of approximately ₹75 per user.  
PACT LITE (₹30/week)

Total pool \= 100 × 30 \= ₹3000

Max per user \= ₹300

Can fully reimburse ≈ 10 users (3000 / 300\)

Coverage: 50% per event

 PACT PLUS (₹50/week)

Total pool \= 100 × 50 \= ₹5000

Max per user \= ₹600

Can fully reimburse ≈ 8 users (5000 / 600 ≈ 8\)

Coverage: 75% per event  
PACT PRO (₹75/week)

Total pool \= 100 × 75 \= ₹7500

Max per user \= ₹1000

Can fully reimburse ≈ 7 users (7500 / 1000 ≈ 7\)

Coverage: 100% per event

**3.3 Alert & Payout Mechanism**

PACT operates on a hybrid payout model:

* Automatic Trigger-Based Payouts:  
   System detects events and directly processes compensation

* Request-Based Review:  
   Workers can raise requests in edge cases where:

  * Triggers were missed

  * Impact was partially captured

* Weekly Settlement System:  
   All payouts are aggregated and processed in structured cycles for consistency

**4\. Methodology, System Implementation & Innovation**

PACT is built as an event-driven, AI-integrated system that combines real-time data processing, predictive analytics, and secure financial execution.

**4.1 System Workflow**

The end-to-end workflow includes:

* Worker onboarding and policy configuration

* Continuous ingestion of environmental and operational signals

* Detection and classification of disruption events

* Impact analysis using predictive models

* Dynamic payout calculation and execution

* Real-time dashboard updates and notifications

**Tech Stack**  
\* Programming Languages: JavaScript, Python  
\* Languages and Frameworks: React Native, Node JS  
\* Tools and Technologies: Mongo DB, Expo Go/Expo Dev, Web Scrapper   
\* APIs: Google Maps, Google's Weather API, [GNews.io](http://gnews.io/), Gemini API  
\* ML Algorithms: XG Boost, Random forest, Gradient Boosting, Logistic Regression  
\* AI Models : Generative AI, Explainable AI (SHAP)  

**4.2 Optimized Onboarding & Identity Assurance**

A robust onboarding process is critical to ensure authentic user identity, data security, and policy integrity within the PACT ecosystem.

### **Seamless Rider Onboarding**

PACT is designed to provide a **low-friction onboarding experience** tailored for gig workers:

* **Delivery Partner ID Linking**  
   Workers link their existing platform identity (e.g., delivery partner ID) to ensure authenticity and continuity of earnings data

* **Mobile Number Verification (OTP-Based)**  
   Secure login and verification through OTP ensures that each account is tied to a valid and active user

This approach ensures **quick onboarding** while maintaining a reliable identity layer.

**Secure Identity & Data Protection**

To safeguard sensitive user information and prevent misuse:

* Personal identifiers (phone number, delivery ID) are securely stored

* Data handling follows a **minimal exposure principle**, ensuring only required information is processed

* Identity consistency is maintained across sessions and transactions

**Policy Integrity via Cryptographic Trust**

PACT introduces a **cryptographic trust layer** during onboarding to ensure that policies remain transparent and tamper-proof:

* **Cryptographic Hashing of Policy Terms**  
   Each policy is converted into a unique hash at the time of creation

* **Immutable Policy Record**  
   Once generated, the policy terms cannot be altered without detection

* **Proof of Commitment**  
   The hashed policy acts as a verifiable guarantee that:

  * the company cannot arbitrarily modify terms

  * the user is protected against hidden changes

**Trust-Centric Design Outcome**

This onboarding and security framework ensures:

* Verified and authentic users

* Protection of sensitive personal data

* Transparency in policy agreements

* Increased trust between platform and workers

**4.3 Event Detection & Data Integration**

* Weather APIs (rainfall, heatwaves, cyclones)  
* Government alerts and public safety notifications  
* News feeds processed using NLP  
* Social signals and satellite data 

A multi-source consensus engine ensures that only verified events trigger system actions.

### **4.4 Predictive Modeling & Intelligence Layer** 

* Earnings Prediction Model (XGBoost):  
   Estimates expected weekly income

* Risk Prediction Model:  
   Uses time, location, and environmental signals to estimate disruption probability

* Event Confidence Model:  
   Combines news, weather, and signals to validate event authenticity

**4.5 Fraud Detection & Safeguards**

* GPS consistency and location validation

* Device motion tracking

* Historical behavior deviation analysis

* Multi-rider correlation detection

* Identity verification via Aadhaar/UPI

**4.6 Product & User Experience**

* One-thumb, rider-focused mobile UI  
* Live earnings tracker and missed income estimator  
* Real-time notifications and alerts  
* Weekly resilience score and analytics  
* Offline logging and voice-first interactions

**4.7 Innovation & Novelty**

PACT introduces several novel system-level innovations:

### **Explainable & Generative AI**

* Explainable AI (SHAP-based insights) to justify payout decisions

* Generative AI layer to provide **human-readable explanations** for users

**Hybrid Event Intelligence**

* Combination of **ML models \+ NLP \+ APIs** for accurate event detection

* News verification using **NLP-based signal extraction**

* Multi-source consensus for high-confidence triggers

**Intelligent Rider Interaction**

* AI-powered chatbot for:

  * Query resolution

  * Payout explanation

  * System navigation

* Voice-first interaction for accessibility

**Real-Time Risk Visualization**

* Dynamic **heatmaps for city-level risk zones**

* Visual indicators for disruption intensity and safety awareness

**Cryptographic Trust Layer**

* Policy integrity ensured through:

  * Cryptographic hashing  
  * Digitally signed policy documents  
  * Immutable, append-only audit logs  
  * Trusted timestamping mechanisms

**Multi-Trigger Parametric Engine**

* Supports **stacked triggers** (multiple simultaneous disruptions)

* Micro time-window coverage for short-duration losses

* Real-time adaptive payout calculations

## 

## **5\. Results, Discussion & Comparative Analysis**

**Simulated Outputs**

* Time-Based Risk Graph:  
   Shows variation of disruption probability across the day

* Rainfall Threshold Graph:  
   Identifies conditions where payouts are triggered

* City-Level Risk Heatmap:  
   Visualizes regional risk intensity across urban areas

**Comparative Analysis**

**Key Observations**

Predictive modeling significantly improves responsiveness to disruptions

Automated triggers reduce dependency on manual processes

Earnings-based evaluation ensures **fair and proportional payouts**

Integrated fraud detection minimizes misuse while maintaining accessibility

## **6\. Adversarial Defense and Anti-Spoofing Strategy (Market Crash)**

**6.1 Scenario: Large-Scale Disruptions**

In large-scale disruption scenarios such as extreme weather events, city-wide outages, or coordinated system failures, the platform may encounter:

* Simultaneous trigger activations across multiple regions  
* High payout demand within short time windows  
* Increased risk of fraudulent or inconsistent activity  
* Reduced reliability of standard data sources (e.g., GPS signal loss)

These conditions define a “market crash” scenario, where both financial stability and system integrity are at risk.

### **6.2 Financial & Operational Resilience Mechanisms**

To maintain stability during such events, PACT incorporates:

* **Tiered Payout Distribution**  
   Prioritizes high-severity and high-impact cases

* **Strict Cap Enforcement**  
   Hourly, daily, and weekly limits ensure controlled payout exposure

* **Dynamic Premium Adjustment**  
   Adapts pricing based on observed risk and system stress

* **Escrow-Backed Liquidity Pool**  
   Ensures availability of funds for critical payouts

* **Multi-Source Event Validation**  
   Prevents false triggers through cross-verification of data

**6.3 Data Reliability Under Constraints (Low-Signal Environments)**

In large-scale disruptions, **GPS signals may be unreliable or unavailable**.  
 PACT addresses this using a **multi-signal location estimation system**:

* Uses motion sensors (accelerometer, gyroscope, compass) to track movement from the last known location

* Cross-validates movement using nearby **Wi-Fi and cellular signal patterns**

* Builds a “location fingerprint” based on environmental signals

* Applies consistency checks:

  * Speed validation

  * Direction alignment

  * Environmental feasibility

By fusing these inputs, the system generates a **best-estimate location**, ensuring:

* Continued functionality even without GPS

* Higher resistance to spoofing and manipulation

* Reliable validation during critical events

**6.4 Anti-Fraud & Integrity Safeguards**

This multi-layered approach ensures:

* Reduced dependency on a single data source (e.g., GPS)

* Detection of impossible or manipulated movement patterns

* Increased difficulty in spoofing or faking location data

* Reliable verification even in degraded environments

**6.5 Outcome**

By combining **financial controls, intelligent validation, and resilient data systems**, PACT ensures:

* Fair and prioritized payouts  
* System stability during high-load scenarios  
* Robust fraud resistance  
* Continued operation even under infrastructure limitations

**7\. Business Model & Scalability**

PACT is designed as a scalable, sustainable insurtech platform.

7.1 Revenue Model

* Weekly micro-premiums based on expected earnings and risk exposure

* Dynamic pricing adjusts based on historical disruption patterns

  7.2 Cost Optimization  
* Automated systems reduce operational overhead

* Fraud detection minimizes unnecessary payouts

  7.3 Scalability  
* Extendable to:

  * Ride-hailing drivers

  * Logistics workers

  * Freelance gig workers

* Regional segmentation ensures adaptability across Indian cities and conditions

**8\. References**

### Parametric Insurance & System Design

* \[1\] T. Käbisch and L. Johns, “A technical approach for blockchain-based parametric insurance,” Hochschule Mittweida, Mittweida, Germany, Tech. Rep., n.d.  
* \[2\] D. Popovic, C. Avis, M. Byrne, C. Cheung, M. Donovan, Y. Flynn, C. Fothergill, Z. Hosseinzadeh, Z. Lim, and J. Shah, “Understanding blockchain for insurance use cases,” British Actuarial Journal, vol. 25, e12, pp. 1–23, 2020, doi: 10.1017/S1357321720000148.  
* \[3\] L. Pandiri and S. Chitta, "AI-Driven Parametric Insurance Models: The Future of Automated Payouts for Natural Disaster and Climate Risk Management," Journal for Re Attach Therapy and Developmental Diversities, vol. 6, no. 2, pp. 1856–1868, 2023\.  
* \[4\] A. J. Hobday, L. R. Little, J. R. Watson, and C. M. Spillman, "Parametric insurance for climate adaptation in fisheries and aquaculture," Reviews in Fish Biology and Fisheries, vol. 35, pp. 175–185, 2025\.

AI, Fraud Detection & Data Validation

* \[5\] Z. Ghadiri, M. Ranjbar, F. Ghanbarnejad, and S. Raeisi, “Automated fake news detection using cross-checking with reliable sources,” arXiv preprint arXiv:2201.00083, 2022\.  
* \[6\] M. Bhujbal, B. B. Bhawnekar, and P. Deshmukh, “News aggregation using web scraping news portals,” International Journal of Advanced Research in Science, Communication and Technology (IJARSCT), vol. 3, no. 2, July 2023, doi: 10.48175/IJARSCT-12138.

Payments & Financial Systems

* \[7\] D. Ding, R. Gonzalez, Y. Ma, and Y. Zeng, “The effect of instant payments on the banking system: Liquidity transformation and risk-taking,” Apr. 12, 2024\.

Gig Economy & Food Delivery Insights

* \[8\] A. Radhakrishnan and N. Singha Roy, "Gig Economy Workers' Livelihood: A Qualitative Study of Ride-Hailing Platforms in Bangalore City, India," Artha Vijnana, vol. LXV, no. 2, June 2023\.  
* \[9\] A. Bhuvanesh and T. R. Kalailakshmi, "A Study on the Challenges Faced by Gig Workers in Online Food Delivery," International Journal of Research Publication and Reviews, vol. 5, no. 5, pp. 2544–2548, May 2024\.  
* \[10\] A. Behera, B. Sharma, N. Relan, Harshula, V. Kaul, and A. Prakash, "Understanding Food Delivery Platform: Delivery Persons' Perspective," School of Public Policy and Governance, Tata Institute of Social Sciences, Hyderabad (TISS-HYD).

Industry Benchmarking (Competitive Analysis)

Our comparative analysis includes platforms such as:

1. Arbol  
2. Descartes  
3. Blink Parametric  
4. Insillion

These were evaluated based on:

* real-time event detection  
* personalization  
* fraud prevention  
* automation capabilities  
* trust and transparency layers

