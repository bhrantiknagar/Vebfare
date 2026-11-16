# Vebfare — Supporting Unrepresented Ideas
 
> **"You have the idea. We help you fund it, build it, and present it."**

Vebfare is a platform and initiative created for everyday innovators — nurses, teachers, tradespeople, mechanics, store workers, and dreamers — who have great ideas but lack the financial runway, technical skills, or business knowledge to bring them to market.

Vebfare is a venture foundry built for everyday innovators who have high-conviction breakthrough ideas but cannot pursue them due to financial barriers, lack of technical execution skills, or no understanding of market sizing and corporate structuring.
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
