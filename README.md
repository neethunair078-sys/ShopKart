# 🛒 ShopKart

A modern e-commerce web application built with **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS**, and **JSON Server**. The application allows users to browse products, view product details, manage a shopping cart, register/login, and proceed to checkout.

---

## 🚀 Features

### 🛍️ Product Management

* View all available products
* Product details page
* Product ratings and reviews
* Responsive product grid layout

### 🛒 Shopping Cart

* Add products to cart
* Remove products from cart
* Increase/Decrease product quantity
* Automatically update cart total
* Display cart item count in the navigation bar
* Empty cart functionality
* Cart data persists using localStorage

### 👤 User Authentication

* User Registration
* User Login
* Logout functionality
* Prevent duplicate email registration
* Store logged-in user using Local Storage

### 💳 Checkout

* Checkout available only for logged-in users
* Order summary
* Cash on Delivery payment option
* Clear cart after successful order

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Icons
* Axios
* React toaster

### Backend (Mock API)

* JSON Server

### State Management

* Redux Toolkit


---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/neethunair078-sys/ShopKart.git
```

Move into the project folder

```bash
cd ShopKart-ecommerce
```

Install dependencies

```bash
npm install
```

Start the React application

```bash
npm run dev
```

---

## ▶️ Run JSON Server

Install JSON Server (if not already installed)

```bash
npm install -g json-server
```

Start the server

```bash
json-server --watch db.json --port 5000
```

API URL

```text
http://localhost:5000
```

---

## 📌 API Endpoints

### Products

```text
GET /products
GET /products/:id
```

### Users

```text
GET /users
POST /users
GET /users?email=user@example.com
```

---


## 📄 License

This project is created for learning and portfolio purposes.
