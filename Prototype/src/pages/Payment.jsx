import { useState } from 'react';
import '../styles/Payment.css';

// ─────────────────────────── MOCK DATA ───────────────────────────
const DECISION_RULES = [
  { trigger: 'Rainfall > 80mm', payout: '₹500', region: 'Chennai', status: 'triggered' },
  { trigger: 'Temperature > 45°C', payout: '₹300', region: 'Delhi NCR', status: 'evaluating' },
  { trigger: 'Flood Alert Level 3', payout: '₹2,000', region: 'Kerala', status: 'evaluating' },
];

const TIER_DATA = [
  { tier: 'Bronze', color: 'from-amber-600 to-amber-800', textColor: 'text-amber-500', events: { rain: '₹300', heat: '₹200' }, active: false },
  { tier: 'Silver', color: 'from-gray-400 to-gray-500', textColor: 'text-gray-500', events: { rain: '₹500', heat: '₹350' }, active: true },
  { tier: 'Gold', color: 'from-yellow-400 to-yellow-600', textColor: 'text-yellow-500', events: { rain: '₹800', heat: '₹500' }, active: false },
];

const BATCH_SETTLEMENTS = [
  { id: 1, event: 'Cyclone Warning', date: 'Mar 15', amount: '₹1,48,200', workers: 340, status: 'Settled' },
  { id: 2, event: 'Heavy Rainfall', date: 'Mar 12', amount: '₹62,500', workers: 125, status: 'Settled' },
];

const WORKFLOW_STEPS = [
  { step: 'Event Detected', time: '14:00', done: true, icon: '📡' },
  { step: 'Data Verified', time: '14:02', done: true, icon: '✅' },
  { step: 'Auto-Approved', time: '14:03', done: true, icon: '🤖' },
  { step: 'Paid to Workers', time: '14:08', done: false, icon: '🎯' },
];

const NOTIFICATIONS = [
  { name: 'Ravi Kumar', role: 'Auto Driver', amount: '₹500', time: '2s ago', icon: '🚗' },
  { name: 'Priya Sharma', role: 'Delivery', amount: '₹1,200', time: '8s ago', icon: '🛵' },
  { name: 'Deepak Singh', role: 'Daily Wage', amount: '₹800', time: '15s ago', icon: '🏗️' },
];

const RETRY_LOG = [
  { id: 'TXN-89231', worker: 'Arjun R.', amount: '₹800', reason: 'UPI timeout', retries: 3, status: 'Resolved' },
  { id: 'TXN-89244', worker: 'Sunita B.', amount: '₹500', reason: 'Bank down', retries: 1, status: 'Retrying' },
];

function StatusBadge({ status }) {
  const styles = {
    evaluating: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    triggered: 'bg-purple-100 text-purple-600 border-purple-200',
    settled: 'bg-green-100 text-green-600 border-green-200',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${styles[status]}`}>
      {status.toUpperCase()}
    </span>
  );
}

// ─────────────────────────── MAIN COMPONENT ───────────────────────────

export default function Payment() {
  const [streamMode, setStreamMode] = useState('hourly');
  const [expandedBatch, setExpandedBatch] = useState(null);

  return (
    <div className="mobile-frame text-gray-800">

      {/* ═══════════ HEADER AREA ═══════════ */}
      <div className="pt-12 pb-6 px-6 text-white relative z-10">

        {/* Status Bar Mockup */}
        <div className="flex justify-between items-center mb-6 text-sm font-medium opacity-90">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            {/* Wifi: Solid wedge */}
            <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.5L23.5 7.6C23 7.2 18.5 4.5 12 4.5C5.5 4.5 1 7.2 0.5 7.6L12 21.5Z" /></svg>
            {/* Cell Signal: Vertical bars */}
            <svg className="w-[15px] h-[15px]" viewBox="0 0 16 16" fill="currentColor">
              <rect x="0" y="10" width="2.5" height="4" />
              <rect x="4" y="7" width="2.5" height="7" />
              <rect x="8" y="4" width="2.5" height="10" />
              <rect x="12" y="1" width="2.5" height="13" fillOpacity="0.4" />
            </svg>
            {/* Battery */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-1v-4h1v4zm-2.5-10V2.5c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5V4H7.5C6.67 4 6 4.67 6 5.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5h-3.5zm1 16h-7V6h7v14z" />
              <rect x="8" y="8" width="8" height="10" fill="white" fillOpacity="0.9" />
            </svg>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 bg-purple-200 flex-shrink-0">
            {/* Placeholder avatar */}
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white leading-tight">Instant Payment System</h1>
            <p className="text-xs text-white/80 font-medium">Gig Worker Coverage · Chennai</p>
          </div>
        </div>
      </div>

      {/* ═══════════ MAIN CARDS AREA ═══════════ */}
      <div className="px-4 pb-24 space-y-4 relative z-10 w-full overflow-hidden">

        {/* Card 1: Total Wallet Balance */}
        <div className="glass-card p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total Wallet Balance</p>
          <div className="flex items-baseline gap-1">
            <h2 className="text-4xl font-extrabold text-purple-700 tracking-tight">₹1,240</h2>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1">Updated just now</p>
        </div>

        {/* Card 2 & 3: Split Balances */}
        <div className="flex gap-4">
          <div className="glass-card p-4 flex-1">
            <p className="text-[11px] font-bold text-gray-700 mb-1">Available to withdraw</p>
            <p className="text-2xl font-bold text-green-500">₹980</p>
          </div>
          <div className="glass-card p-4 flex-1">
            <p className="text-[11px] font-bold text-gray-700 mb-1">Processing</p>
            <p className="text-2xl font-bold text-purple-600">₹260</p>
          </div>
        </div>

        {/* Card 4: Linked UPI Account */}
        <div className="glass-card p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Linked UPI Account</p>

          <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-3 flex justify-between items-center mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-800">9XXXXXX123</p>
              <p className="text-[10px] text-gray-500">Paytm UPI</p>
            </div>
            <div className="w-8 h-8 flex items-center justify-center text-purple-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <button className="w-full btn-withdraw py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-purple-500/30">
            One-Tap UPI Withdraw
          </button>
        </div>

        {/* Card 5: Escrow Pool Health */}
        <div className="glass-card p-5">
          <div className="flex justify-between items-end mb-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Escrow Pool Health</p>
            <p className="text-[10px] font-bold text-gray-700">Backed 98.3%</p>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200 block">
            <div className="h-full rounded-full progress-fill" style={{ width: '98.3%' }}></div>
          </div>
        </div>

        {/* Card 6: Micro-Payout Stream */}
        <div className="glass-card p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Micro-Payout Stream</p>

          <div className="toggle-group mb-4">
            <button
              className={`toggle-btn ${streamMode === 'hourly' ? 'active' : ''}`}
              onClick={() => setStreamMode('hourly')}
            >
              Per Hour
            </button>
            <button
              className={`toggle-btn ${streamMode === 'lumpsum' ? 'active' : ''}`}
              onClick={() => setStreamMode('lumpsum')}
            >
              Lump Sum
            </button>
          </div>
        </div>

        {/* Card 7: Decision Engine (Restored feature) */}
        <div className="glass-card p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1">
            <span className="text-base text-purple-500">⚡</span> Decision Engine
          </p>
          <div className="space-y-3">
            {DECISION_RULES.map((rule, i) => (
              <div key={i} className="bg-gray-50/60 rounded-xl p-3 border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold text-gray-700">{rule.region}</span>
                  <StatusBadge status={rule.status} />
                </div>
                <p className="text-xs font-mono text-purple-600 font-semibold">{rule.trigger} → <span className="text-green-500">{rule.payout}</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Card 8: Tiered Payout System (Restored feature) */}
        <div className="glass-card p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1">
            <span className="text-base text-yellow-500">🏆</span> Tier Benefits
          </p>
          <div className="flex gap-2 justify-between">
            {TIER_DATA.map((t, i) => (
              <div key={i} className={`flex-1 rounded-xl p-3 border text-center ${t.active ? 'bg-purple-50 border-purple-200 shadow-sm' : 'bg-gray-50/50 border-gray-100'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm mb-2 shadow-sm`}>
                  {t.tier[0]}
                </div>
                {t.active && <p className="text-[8px] font-bold text-purple-500 uppercase mb-1">Your Tier</p>}
                <p className={`text-[10px] font-bold mb-1 ${t.textColor}`}>{t.tier}</p>
                <div className="text-[9px] space-y-1 mt-2">
                  <div className="flex justify-between text-gray-600"><span>🌧</span> <span className="font-bold">{t.events.rain}</span></div>
                  <div className="flex justify-between text-gray-600"><span>🌡</span> <span className="font-bold">{t.events.heat}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 9: Batch Settlements (Restored feature) */}
        <div className="glass-card p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1">
            <span className="text-base text-blue-500">📊</span> Batch Settlements
          </p>
          <div className="space-y-2">
            {BATCH_SETTLEMENTS.map((batch) => (
              <div key={batch.id} className="bg-gray-50/60 rounded-xl p-3 border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-gray-800">{batch.event}</span>
                  <span className="text-xs font-bold text-purple-600">{batch.amount}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-gray-500">{batch.date} · {batch.workers} workers</span>
                  <span className="text-[10px] font-bold text-green-500 px-2 py-0.5 bg-green-50 rounded-full border border-green-100">✓ {batch.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 10: Zero-Claim Tracker & Notifications (Restored feature) */}
        <div className="flex gap-4">
          <div className="glass-card p-4 flex-1">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Workflow</p>
            <div className="space-y-3 relative before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-gray-200">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={i} className="flex gap-2 relative z-10 items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] bg-white border ${step.done ? 'border-green-400 text-green-500 shadow-sm shrink-0' : 'border-gray-300 text-gray-400 shrink-0'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold leading-none ${step.done ? 'text-gray-800' : 'text-gray-400'}`}>{step.step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-4 flex-1 flex flex-col">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Live Feed</p>
            <div className="space-y-3 flex-1">
              {NOTIFICATIONS.map((notif, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-[10px] flex items-center justify-center border border-purple-200 shrink-0">{notif.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between leading-none items-center">
                      <p className="text-[10px] font-bold text-gray-800 truncate">{notif.name}</p>
                      <p className="text-[10px] font-bold text-green-500">{notif.amount}</p>
                    </div>
                    <p className="text-[8px] text-gray-400 mt-0.5">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 11: Retry Log (Restored feature) */}
        <div className="glass-card p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1">
            <span className="text-base">🔁</span> Retry Log
          </p>
          <div className="space-y-2">
            {RETRY_LOG.map((entry, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-bold text-gray-800">{entry.worker} <span className="font-normal text-gray-500 ml-1">({entry.amount})</span></p>
                  <p className="text-[10px] text-purple-500 font-mono mt-0.5">{entry.id} · {entry.reason}</p>
                </div>
                <div>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${entry.status === 'Resolved' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-yellow-50 text-yellow-600 border-yellow-200'}`}>
                    {entry.status} ({entry.retries}x)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ═══════════ BOTTOM NAVIGATION BAR ═══════════ */}
      <div className="bottom-nav">
        {/* Home */}
        <div className="flex flex-col items-center">
          <svg className="nav-icon text-purple-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        {/* Analytics */}
        <div className="flex flex-col items-center opacity-40">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
          </svg>
        </div>

        {/* Center Scanner Button */}
        <div className="flex flex-col items-center opacity-40">
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8V5a2 2 0 012-2h3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M21 16v3a2 2 0 01-2 2h-3M9 9h6v6H9z" />
          </svg>
        </div>

        {/* Documents */}
        <div className="flex flex-col items-center opacity-40">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
        </div>
        {/* Profile */}
        <div className="flex flex-col items-center opacity-40">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>

    </div>
  );
}
