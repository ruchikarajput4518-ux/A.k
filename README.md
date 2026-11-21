# RIVEN — Luxury Fashion House (Full-Stack)

An haute couture digital atelier and luxury fashion e-commerce experience featuring a React/Vite frontend and an Express/Node.js backend REST API.

---

## Overview

RIVEN is a high-end luxury fashion brand interface featuring architectural silhouettes, editorial layouts, horology showcases, bespoke tailoring, and couture gown collections.

### Features

- **Architectural Homepage**: Editorial hero showcases, atelier signature statements, and dynamic category discovery.
- **Menswear Collection**: Bespoke tailored suits, overcoats, and formalwear with category filtering and detailed specifications.
- **Evening Gowns & Couture**: Architectural gowns, silk drapery, and couture statements.
- **Accessories & Fine Horology**: Timepieces, leather goods, and fine craftsmanship showcases.
- **Atelier Experience**: Private styling and bespoke consultation appointment booking.
- **Interactive Shopping Bag & Quick View**: Full cart drawer, instant quick view modals, and seamless concierge checkout.
- **Backend REST API**: Complete product catalogue, order tracking, appointment management, and VIP newsletter persistence.

---

## Project Structure

```
.
├── backend/                        # Node.js + Express REST API
│   ├── data/                       # File-backed JSON databases (orders, products, appointments)
│   ├── src/
│   │   ├── controllers/            # Request handlers (products, orders, appointments, inquiries)
│   │   ├── data/                   # Initial catalogue seeds
│   │   ├── middleware/             # Validation & error handling
│   │   ├── routes/                 # Express API routes (/api/*)
│   │   ├── utils/                  # JSON storage utility
│   │   └── app.js                  # Express app setup & CORS
│   ├── test/                       # API integration test suite
│   ├── .env.example
│   ├── package.json
│   ├── README.md
│   └── server.js                   # Server entry point (port 5000)
│
├── front end/                      # React + Vite application (port 3000)
│   ├── public/assets/              # High-resolution luxury assets
│   ├── src/
│   │   ├── components/             # UI components (Cart, Layout, Product, Search)
│   │   ├── context/                # Global state (ShopContext)
│   │   ├── data/                   # Product catalogue & fallback data
│   │   ├── pages/                  # Collection pages (Menswear, Gowns, Accessories, Atelier)
│   │   ├── services/               # API client service (api.js)
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js              # Configured with proxy to backend (/api -> port 5000)
│
├── stitch_riven_luxury_fashion_house/  # Design system specifications & mockups
├── package.json                    # Root workspace script coordinator
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### 1. Launch Backend Server
```bash
cd backend
npm install
npm run dev
```
> Server runs on `http://localhost:5000`. Test via `http://localhost:5000/api/health`.

### 2. Launch Frontend Application
In a separate terminal:
```bash
cd "front end"
npm install
npm run dev
```
> Frontend runs on `http://localhost:3000` and automatically proxies `/api` calls to port 5000.

### 3. Run Backend API Tests
```bash
cd backend
npm test
```

---

## License

Private & Proprietary — RIVEN Luxury Fashion House.
