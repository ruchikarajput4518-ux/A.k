# RIVEN Luxury Fashion House — How to Run Frontend & Backend Together

This guide outlines how to run the full-stack RIVEN luxury atelier application with both the Express REST API backend and the React/Vite frontend operating simultaneously.

---

## Architecture Summary

| Component | Technology | Local URL | Port |
|---|---|---|---|
| **Frontend** | React 18 + Vite | [http://localhost:3000](http://localhost:3000) | `3000` |
| **Backend API** | Node.js + Express | [http://localhost:5000/api](http://localhost:5000/api) | `5000` |
| **API Health Check** | JSON Health status | [http://localhost:5000/api/health](http://localhost:5000/api/health) | `5000` |

---

## Method 1: Single Command Launch (Recommended)

Run both the backend and frontend simultaneously in a single terminal with color-coded logs:

1. Open a terminal in the root project directory:
   ```bash
   cd "stitch_riven_luxury_fashion_house (1)"
   ```

2. Run:
   ```bash
   npm run dev
   ```

> This launches `backend` (yellow logs) on port 5000 and `frontend` (cyan logs) on port 3000 concurrently.

---

## Method 2: Two Separate Terminals

If you prefer viewing server and client logs in separate terminal windows:

### Terminal 1 — Backend (Port 5000)
```bash
cd backend
npm run dev
```
You should see:
```text
=======================================================
  R I V E N — Luxury Fashion House REST API
  Environment: development
  Server Port: 5000
  API Base:    http://localhost:5000/api
  Health:      http://localhost:5000/api/health
=======================================================
```

### Terminal 2 — Frontend (Port 3000)
```bash
cd "front end"
npm run dev
```
You should see:
```text
  VITE v5.4.21  ready in 240 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

---

## Verification & Testing

### 1. View Frontend in Browser
Open **[http://localhost:3000](http://localhost:3000)** in your browser:
- Browse luxury collections (Menswear, Evening Gowns, Horology, Leather Goods).
- Open the Shopping Bag, click **Checkout**, and submit a bespoke commission (this registers with the backend at `http://localhost:5000/api/orders`).
- Open **Private Atelier** and book a fitting consultation (registers at `http://localhost:5000/api/appointments`).
- Subscribe in the footer newsletter (registers at `http://localhost:5000/api/inquiries/newsletter`).

### 2. Verify Backend API Directly
- **Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)
- **Products Catalog**: [http://localhost:5000/api/products](http://localhost:5000/api/products)
- **Active Orders**: [http://localhost:5000/api/orders](http://localhost:5000/api/orders)
- **Booked Appointments**: [http://localhost:5000/api/appointments](http://localhost:5000/api/appointments)

### 3. Run Backend Automated Tests
To run the automated test suite verifying all 7 endpoints:
```bash
npm test
# or
npm --prefix backend test
```

---

## Production Build

To build the frontend for production deployment:
```bash
npm run build
```
The compiled assets will be created in `front end/dist/`.

---

## Troubleshooting

- **Port 5000 or 3000 already in use**:
  To stop any lingering node processes on Windows:
  ```powershell
  Get-Process -Name node | Stop-Process -Force
  ```
- **Backend Persistence**:
  All orders and appointments are saved to JSON files under `backend/data/` and will persist across restarts.
