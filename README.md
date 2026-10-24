# Khelo 🏟️

**Khelo** is a full-stack web application designed for discovering, listing, and booking sports turfs and venues. Built with Node.js, Express, MongoDB, and EJS, Khelo connects sports enthusiasts with local turf facilities, making slot reservation and turf management seamless.

---

## 🚀 Features

- **Turf & Venue Listings**:
  - Explore featured turfs on the landing page.
  - Browse detailed venue descriptions, sports categories, pricing, contact information, and photos.
  - Create, edit, and delete venue listings (restricted to venue owners).

- **Slot Booking System**:
  - Check real-time slot availability for morning, afternoon, evening, and night slots.
  - Book slots by selecting desired dates.
  - Prevent double bookings using unique index constraints.
  - View personal bookings and cancel reservations.

- **Reviews & Ratings**:
  - Add ratings and feedback on turf listings.
  - Delete reviews (restricted to review authors).

- **User Authentication & Authorization**:
  - User registration and login powered by Passport.js and local authentication.
  - Session-based persistence with flash notifications.
  - Role-based permissions preventing unauthorized modifications to listings and reviews.

- **Input Validation & Error Handling**:
  - Robust schema validation using Joi.
  - Centralized custom error handling with dynamic error pages.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Templating Engine**: EJS with `ejs-mate` layouts
- **Authentication**: Passport.js (`passport-local`, `passport-local-mongoose`)
- **Validation**: Joi
- **Styling & UI**: Vanilla CSS / Bootstrap & custom UI templates

---

## 📁 Project Structure

```text
khelo/
├── controllers/          # Route controller logic (listings, reviews, bookings, users)
├── init/                 # Sample seed data & database initialization script
│   ├── data.js           # Mock turf listings data
│   └── index.js          # DB seeding script
├── models/               # Mongoose data models
│   ├── booking.js        # Booking schema & unique index configuration
│   ├── listing.js        # Turf listing schema & cascade review deletion hooks
│   ├── review.js         # Review & rating schema
│   └── user.js           # User schema integrated with Passport-Local Mongoose
├── public/               # Static assets (stylesheets, client scripts, icons)
├── routes/               # Express router modular routes
│   ├── bookings.js       # Slot booking & cancellation endpoints
│   ├── listings.js       # CRUD turf listing routes
│   ├── reviews.js        # Review submission & deletion routes
│   └── users.js          # Authentication (signup, login, logout)
├── utils/                # Utility helpers (wrapAsync, ExpressError)
├── views/                # EJS view templates and partials
├── app.js                # Application entry point & middleware configuration
├── middleware.js         # Authentication & authorization middleware
├── schema.js             # Joi validation schemas
└── package.json          # Project dependencies & scripts
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16.x or later recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on default port `27017`

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd khelo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Database Seeding (Optional)**:
   To populate your local MongoDB instance with initial turf listings:
   ```bash
   node init/index.js
   ```

4. **Start the application**:
   ```bash
   node app.js
   ```
   *(Or using nodemon if installed globally: `nodemon app.js`)*

5. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Key Routes Overview

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/home` | Landing page with featured turfs |
| `GET` | `/listings` | View all available turf listings |
| `GET` | `/listings/new` | Form to create a new turf listing |
| `GET` | `/listings/:id` | Detailed view of a turf + reviews & booking slots |
| `POST` | `/listings` | Create a new turf listing |
| `GET` | `/listings/:id/edit` | Form to edit an existing turf listing |
| `PUT` | `/listings/:id` | Update an existing turf listing |
| `DELETE` | `/listings/:id` | Delete a turf listing |
| `POST` | `/listings/:id/book` | Book a slot for a specific date and turf |
| `GET` | `/my-bookings` | View current user's reservations |
| `POST` | `/listings/:id/reviews` | Submit a review for a turf |
| `GET` | `/signup` / `/login` | User registration and login forms |
| `GET` | `/logout` | Log out the current user session |

---

## 👤 Author

- **Mridul Gupta**

