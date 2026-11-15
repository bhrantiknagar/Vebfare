# Vebfare — The Idea Realization Foundry & Venture Collective

> **"You have the frontline insight. We bring the capital, code, and market bridge."**

Vebfare is a venture foundry built for everyday innovators who have high-conviction breakthrough ideas but cannot pursue them due to financial barriers, lack of technical execution skills, or no understanding of market sizing and corporate structuring.

Instead of generic courses or predatory 40% equity grabs, Vebfare operates on a **Fair-Foundry Model**:
1. **IP Shield & Blind Review**: SHA-256 cryptographic timestamping to seal priority of invention under mutual NDA.
2. **Non-Dilutive Micro-Grants ($15,000 – $50,000)**: Milestone-based discovery checks with zero debt and zero collateral.
3. **The Guild Co-Builder Engine**: Fractional CTOs, hardware engineers, and regulatory specialists embedded to build production-grade MVPs in 4–8 week sprints.
4. **Majority Founder Ownership**: Founders retain 94%+ equity; capped 4%–6% foundry warrants only upon commercial pilot contract execution.

---

## 📁 Repository Structure

```
Vebfare/
├── backend/                  # Node.js + Express REST API & Data Store
│   ├── data/                 # File-based persistent JSON database
│   │   ├── applications.json # Submitted ideas with tracking codes
│   │   ├── projects.json     # Incubated ventures portfolio
│   │   ├── mentors.json      # Guild operators and angel syndicate leads
│   │   └── subscribers.json  # Founder newsletter dispatch
│   ├── server.js             # REST API server & SPA static file server
│   └── package.json
│
└── frontend/                 # High-craft React + Tailwind CSS + Vite SPA
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx               # Navigation, live ticker & triggers
    │   │   ├── Hero.jsx                 # Value proposition & live metrics
    │   │   ├── ChasmSection.jsx         # The 3 Fatal Roadblocks Breakdown
    │   │   ├── FoundryModel.jsx         # 4-Stage Engine from Spark to Pilot
    │   │   ├── VenturesGallery.jsx      # Filterable portfolio & Dossier modal
    │   │   ├── ReadinessCalculator.jsx  # Interactive 5-question viability tool
    │   │   ├── EthicsCharter.jsx        # Founder-first economics & IP protection
    │   │   ├── MentorGuildSection.jsx   # Co-builder & angel onboarding
    │   │   ├── FAQSection.jsx           # Transparent, honest answers
    │   │   ├── Footer.jsx               # Quick links & newsletter dispatch
    │   │   ├── SubmitWizard.jsx         # Multi-step intake wizard
    │   │   └── ApplicationTracker.jsx   # Real-time tracking reference lookup
    │   ├── services/
    │   │   └── api.js                   # Client REST service with resilient fallbacks
    │   ├── App.jsx                      # Main app orchestrator
    │   ├── index.css                    # Modern design system & Tailwind styling
    │   └── main.jsx
    ├── index.html                       # SEO & typography tags
    ├── vite.config.js                   # Vite config with Tailwind & API proxy
    └── package.json
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Option 1: Development Mode (Hot Reloading)

1. **Start the Backend API Server**:
   ```powershell
   cd backend
   npm run start
   ```
   *The backend will run on `http://localhost:5000`.*

2. **Start the Frontend Vite Dev Server (in another terminal)**:
   ```powershell
   cd frontend
   npm run dev
   ```
   *The frontend will run on `http://localhost:5173` with automated API proxying.*

---

### Option 2: Unified Production Mode (Single Command)

The backend is configured to automatically serve the optimized frontend build from `frontend/dist`:

1. Build the frontend:
   ```powershell
   cd frontend
   npm run build
   ```
2. Start the unified server:
   ```powershell
   cd ../backend
   npm run start
   ```
3. Open `http://localhost:5000` in your browser. Both the complete website and the REST API will be served seamlessly from port 5000!

---

## 📡 REST API Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/health` | `GET` | Server status and timestamp |
| `/api/stats` | `GET` | Platform metrics (Capital deployed, ventures active, success rate) |
| `/api/projects` | `GET` | Filterable list of incubated ventures (`?category=`, `?search=`, `?blocker=`) |
| `/api/projects/:id` | `GET` | Detailed dossier for a specific venture |
| `/api/applications` | `POST` | Submit an idea; generates `VEB-2026-XXXX` tracking code & SHA-256 IP hash |
| `/api/applications/:id` | `GET` | Retrieve live review milestones & reviewer notes for a tracking code |
| `/api/calculator` | `POST` | Algorithmic idea readiness scoring & customized 60-day action roadmap |
| `/api/mentors/apply` | `POST` | Onboard fractional CTOs, regulatory leads, and angel syndicates |
| `/api/newsletter` | `POST` | Subscribe to cohort openings and grant drops |

---

## 🛡️ Built-in Demo Data

You can immediately test the **Application Tracker** in the UI with these sample tracking codes:
- **`VEB-2026-8841`**: *DoseGuard AI Pill Dispenser* (Community Pharmacist, Stage: In Committee Review)
- **`VEB-2026-9104`**: *MicroLab Pocket Spectrometer* (High School Teacher, Stage: Feasibility Sprint Active)
