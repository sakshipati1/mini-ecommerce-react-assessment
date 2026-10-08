# Mini E-Commerce Application

A responsive mini e-commerce application built with **React.js and Vite** as part of a React Developer Intern technical assessment.

The application allows users to browse products, search and filter products, view product details, and manage a shopping cart with persistent data using Local Storage.

## 🚀 Features

* Product listing from local JSON data
* Search products by name
* Filter products by category
* Product detail page
* React Router navigation
* Add products to cart
* Increase/decrease product quantity
* Remove products from cart
* Total cart item count
* Total cart price
* Cart persistence using `localStorage`
* Empty cart state
* No-search-results state
* Product not-found state
* Responsive design for desktop, tablet, and mobile
* Reusable React components
* React Hooks and Context API for state management

## 🛠️ Tech Stack

* React.js
* Vite
* JavaScript
* React Router DOM
* CSS
* React Context API
* React Hooks
* Local Storage
* JSON

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── CartItem.jsx
│   ├── CategoryFilter.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── SearchBar.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.json
├── pages/
│   ├── Cart.jsx
│   ├── Home.jsx
│   └── ProductDetails.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd mini-ecommerce
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173/
```

## 🛒 Cart Management

Cart state is managed using the **React Context API**.

The cart supports:

* Adding products
* Increasing quantity
* Decreasing quantity
* Removing products
* Calculating total items
* Calculating total price

Cart data is stored in the browser's **Local Storage**, so the cart remains available even after refreshing the page.

## 🔎 Search and Filtering

The home page provides:

* Product search by name
* Category filtering
* Combined search and category filtering
* Empty state when no matching products are found

## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile devices

Responsive CSS media queries are used to adapt the layout to different screen sizes.

## 🧭 Routing

The application uses **React Router DOM** for navigation.

Available routes:

```text
/                  → Product listing
/product/:id       → Product details
/cart              → Shopping cart
```

## 📦 Product Data

Product information is stored locally in:

```text
src/data/products.json
```

No backend or external product API is required.

## 🧠 Key React Concepts Used

This project demonstrates:

* Functional Components
* Props
* `useState`
* `useEffect`
* `useMemo`
* `useContext`
* React Context API
* React Router
* Local Storage
* Conditional Rendering
* Reusable Components

## 👩‍💻 Author

**Sakshi Patil**

React Developer Intern Candidate
