# RIVEN Luxury Fashion House — Backend REST API

High-end, robust Node.js/Express REST API serving the RIVEN Luxury Fashion House atelier and digital boutique.

## Architecture & Features

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Data Persistence**: JSON-backed file store (`backend/data/`) with zero external database dependencies required. Data automatically persists across server restarts.
- **CORS Configured**: Ready for local Vite frontend (`http://localhost:3000` / `http://localhost:5173`).
- **Input Validation & Error Handling**: Graceful luxury error messages with standard HTTP status codes.

---

## Getting Started

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
A `.env` file is pre-configured:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### 3. Run the Server
- **Development (with hot reload)**:
  ```bash
  npm run dev
  ```
- **Production start**:
  ```bash
  npm start
  ```

Once running, the server is live at `http://localhost:5000`.

---

## API Endpoints Reference

### 1. System Health
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health status, uptime, and endpoint registry |

### 2. Products Catalogue
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Retrieve all luxury products (supports filters) |
| `GET` | `/api/products/:id` | Retrieve single product by ID |
| `GET` | `/api/products/meta/categories` | Retrieve categories & departments list |
| `POST` | `/api/products` | Create a new atelier luxury product |
| `PUT` | `/api/products/:id` | Update an existing luxury piece |
| `DELETE` | `/api/products/:id` | Remove a product from inventory |

#### Query Parameters for `GET /api/products`:
- `department`: Filter by department (`menswear`, `gowns`, `accessories`, `leather-goods`)
- `category`: Filter by category (`suits`, `outerwear`, `shirts`, `knitwear`, etc.)
- `search`: Search across name, description, fabric, and tags
- `sort`: `price_asc`, `price_desc`, or `name_asc`
- `featured`: `true` for highlighted pieces

### 3. Bespoke Orders & Concierge Checkout
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/orders` | Submit a concierge order from shopping bag |
| `GET` | `/api/orders` | List registered client orders |
| `GET` | `/api/orders/:id` | Get details for an order (e.g. `RVN-928104`) |
| `PATCH` | `/api/orders/:id/status` | Update fulfillment status (`pending_concierge`, `in_atelier`, `dispatched`, `delivered`) |

#### Sample Order Payload (`POST /api/orders`):
```json
{
  "name": "Lord Julian Sterling",
  "email": "j.sterling@mayfair.co.uk",
  "address": "14 Grosvenor Square",
  "city": "London",
  "country": "United Kingdom",
  "deliveryMethod": "white-glove",
  "tailoringNotes": "Slightly tapered waist; custom cuff length 34.5 in.",
  "items": [
    {
      "productId": "mens-suit-charcoal",
      "selectedSize": "40R",
      "quantity": 1
    }
  ]
}
```

### 4. Private Atelier Salon Appointments
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/appointments` | Book private atelier fitting or styling consultation |
| `GET` | `/api/appointments` | List registered appointments |
| `GET` | `/api/appointments/:id` | Get appointment by ID (`APT-XXXXXX`) |
| `PATCH` | `/api/appointments/:id/status` | Update status (`confirmed`, `rescheduled`, etc.) |

#### Sample Appointment Payload (`POST /api/appointments`):
```json
{
  "salon": "Paris - Rue du Faubourg Saint-Honoré",
  "service": "Bespoke Tailoring Commission (Suits & Outerwear)",
  "name": "Eleanor Vance",
  "email": "e.vance@private.com",
  "notes": "Fitting for bespoke tuxedo."
}
```

### 5. Private Client Inquiries & Newsletter
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/inquiries/newsletter` | Register for private salon lookbook and invitations |
| `GET` | `/api/inquiries/newsletter` | List registered VIP subscribers |
| `POST` | `/api/inquiries/contact` | Send concierge inquiry message |
| `GET` | `/api/inquiries/contact` | List concierge inquiries |

---

## Directory Structure

```
backend/
├── data/                    # JSON data stores (auto-created)
│   ├── products.json
│   ├── orders.json
│   ├── appointments.json
│   └── subscribers.json
├── src/
│   ├── controllers/         # Business logic
│   ├── data/                # Initial seed data
│   ├── middleware/          # Error handling & validation
│   ├── routes/              # Express route declarations
│   ├── utils/               # Storage helper
│   └── app.js               # Express application config
├── .env                     # Local environment config
├── .env.example
├── package.json
├── README.md
└── server.js                # Server entry point
```
