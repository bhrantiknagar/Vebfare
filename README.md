# Vebfare — The Idea Realization Foundry & Venture Collective

> **"You have the frontline insight. We bring the capital, code, and market bridge."**

Vebfare is a venture foundry built for everyday innovators who have high-conviction breakthrough ideas but cannot pursue them due to financial barriers, lack of technical execution skills, or no understanding of market sizing and corporate structuring.

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
