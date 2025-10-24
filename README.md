# 🛍️ Prostore — Full-Stack Ecommerce App with Next.js 15, React 19 & PostgreSQL

**Prostore** is a modern, fully functional e-commerce web application built with the latest versions of **Next.js**, **React**, **TypeScript**, and **PostgreSQL**.  
It’s designed to demonstrate a real-world shopping platform with authentication, an admin dashboard, product management, integrated payments (PayPal & Stripe), reviews, order tracking, and image uploads.

---

## ✨ Key Features

### 🛒 User Features
- User registration and login with **NextAuth**
- Persistent shopping cart synced with the database
- Payment methods: **PayPal**, **Stripe**, and **Cash on Delivery**
- Order history and editable user profile
- Product ratings and reviews
- Product search, filtering, and featured items
- Automatic **email receipts** after purchases

### ⚙️ Admin Dashboard
- Overview dashboard with metrics and charts (via **Recharts**)
- Full management of products, users, and orders
- Image upload with **UploadThing**
- Advanced search for products, users, and orders
- Secure admin interface for editing and deleting data

---

## 🧱 Tech Stack

- **Next.js 15** – Hybrid rendering (SSR/SSG) and built-in API routes  
- **React 19** – Modern components and performance improvements  
- **TypeScript** – Strong typing for reliability and scalability  
- **PostgreSQL** – Robust relational database  
- **Prisma ORM** – Type-safe database modeling and queries  
- **Zod** – Runtime schema validation  
- **NextAuth.js** – Authentication and session management  
- **React Hook Form** – Form handling and validation  
- **PayPal & Stripe API** – Real payment integration  
- **ShadCN UI + Tailwind CSS** – Clean and consistent UI components  
- **UploadThing** – Secure image uploading  
- **Recharts** – Interactive charts for admin analytics  
- **Resend API** – Automated transactional emails  
- **Jest** – Unit testing framework  

---

## 🧩 Architecture Overview

Prostore is a **monolithic full-stack application** with a clear separation between layers:

- **Frontend (Next.js / React)** — Handles the UI, public pages, and admin interface  
- **Backend (Next.js API Routes + Prisma)** — Handles authentication, database, payments, and server logic  
- **Database (PostgreSQL)** — Stores users, products, orders, reviews, and sessions  

This architecture ensures a consistent, type-safe, and high-performance workflow between client and server.

---

## 👨‍💻 Author

Developed as part of the Udemy course
"Use Next 15, React 19, TypeScript, PostgreSQL and Prisma to build a real-world ecommerce website"
Original course by Brad Traversy
Implementation and customization by Nigel Ferreres.

---

## ⚡ Installation & Local Setup

```bash
# Clone the repository
git clone https://github.com/your-username/prostore.git

# Navigate into the project
cd prostore

# Install dependencies
npm install

# Start the development server
npm run dev


