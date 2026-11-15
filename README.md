# Vebfare — Supporting Unrepresented Ideas

> **"You have the idea. We help you fund it, build it, and present it."**

<<<<<<< HEAD
Vebfare is a platform and initiative created for everyday innovators — nurses, teachers, tradespeople, mechanics, store workers, and dreamers — who have great ideas but lack the financial runway, technical skills, or business knowledge to bring them to market.
=======
Vebfare is a venture foundry built for everyday innovators who have high-conviction breakthrough ideas but cannot pursue them due to financial barriers, lack of technical execution skills, or no understanding of market sizing and corporate structuring.
>>>>>>> b5d9503276c76fb088da7b36e57488a39477b2d1

---

## 📁 Project Architecture

```
Vebfare/
├── backend/                       # Node.js + Express REST API
│   ├── data/                      # File-based JSON data persistence
│   │   ├── applications.json      # Submitted ideas & milestone timeline
│   │   ├── projects.json          # Portfolio of supported ventures
│   │   ├── mentors.json           # Mentors and advisors
│   │   └── subscribers.json       # Newsletter subscribers
│   ├── server.js                  # REST API & static web server
│   └── package.json
│
└── frontend/                      # Clean React 19 + Tailwind CSS + Vite
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx           # Clean header & navigation
    │   │   ├── Hero.jsx             # Down-to-earth value proposition
    │   │   ├── ObstaclesSection.jsx # Why ideas get stuck (Money, Market, Tech, Fear)
    │   │   ├── SupportSection.jsx   # How we help (Grants, Building, Strategy, Pitch)
    │   │   ├── StoriesSection.jsx   # Real stories of everyday people supported
    │   │   ├── ProcessSection.jsx   # 4-step simple process
    │   │   ├── SubmitSection.jsx    # On-page direct idea submission form
    │   │   ├── StatusChecker.jsx    # Application status lookup (by reference code)
    │   │   ├── FAQSection.jsx       # Clear answers to practical questions
    │   │   └── Footer.jsx           # Simple footer with dispatch sign-up
    │   ├── services/
    │   │   └── api.js               # API service connecting to the backend
    │   ├── App.jsx                  # Main single-page application
    │   ├── index.css                # Clean, grounded styles (no flashy neon/dark web3 styling)
    │   └── main.jsx
    ├── index.html
    └── package.json
```

<<<<<<< HEAD
---

## 🚀 How to Run

### Option 1: Unified Server (Single Command)
The backend server serves both the REST API and the built frontend application:
```powershell
cd d:\Vebfare\backend
npm start
```
*Open `http://localhost:5000` in your browser.*

### Option 2: Development Mode (Hot Reloading)
In two separate terminal windows:
```powershell
# Terminal 1 - Backend
cd d:\Vebfare\backend
npm run dev

# Terminal 2 - Frontend
cd d:\Vebfare\frontend
npm run dev
```
*Open `http://localhost:5173` in your browser.*

---

## 🧪 Testing Tracking Codes
You can test the **Status Checker** using existing seeded applications:
- `VEB-2026-8841` (Elena Rostova - Portable Medicine Cold Box)
- `VEB-2026-9104` (David Chen - Pocket Spectrometer)
- Or submit any new idea via the on-page form to generate a brand new live reference code!
=======
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
>>>>>>> b5d9503276c76fb088da7b36e57488a39477b2d1
