<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# CMS Portfolio – Backend API & Admin Dashboard

<p align="center">
  <img src="screenshots/dashboard.png" alt="Filament Admin Dashboard" width="800" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-12-red" />
  <img src="https://img.shields.io/badge/API-REST-blue" />
  <img src="https://img.shields.io/badge/Filament-Admin-orange" />
  <img src="https://img.shields.io/badge/Auth-Sanctum-green" />
  <img src="https://img.shields.io/badge/Status-In%20Progress-yellow" />
</p>

---

## 📌 Project Overview

This project is a **modern portfolio CMS** designed to dynamically manage a personal portfolio (projects, skills, profile, etc.) through a **Laravel REST API** and a **Filament admin dashboard**.

The portfolio frontend is developed **independently** using **React + TypeScript**, and consumes the API via **Axios**.

### Main Goals

* Fully decouple **frontend** and **backend**
* Provide a **professional admin dashboard**
* Easily update portfolio content without touching frontend code

---

## 🎯 Why This Project?

This project serves both **technical and professional** purposes.

### 👨‍💻 Technical Goals

* Practice a modern **API-first architecture**
* Build a **secure REST API** using Laravel Sanctum
* Work with a **decoupled frontend** (React + TypeScript)
* Design a **scalable admin panel** with Filament
* Apply best practices (validation, API resources, separation of concerns)

### 💼 Professional Goals

* Create a **fully manageable portfolio**
* Showcase a **real-world, production-oriented project**
* Demonstrate strong skills in **Laravel backend**, **REST APIs**, and **modern architecture**

This CMS is designed as an **extensible foundation** that can easily be adapted to other use cases (blog, showcase website, lightweight CMS, etc.).

---

## 🧱 Global Architecture

```
[ React + TypeScript ]  --->  Axios  --->  [ Laravel API ]  --->  Database
                                      |
                                      └── Filament Admin Dashboard
```

---

## 🛠️ Technologies Used

### 🔧 Backend Stack

<p>
  <img src="https://skillicons.dev/icons?i=laravel,php,mysql" />
</p>

* Laravel 12
* PHP 8+
* REST API
* Laravel Sanctum
* Filament Admin
* MySQL / PostgreSQL

### 🎨 Frontend Stack (API Consumer)

<p>
  <img src="https://skillicons.dev/icons?i=react,ts,axios" />
</p>

* React
* TypeScript
* Axios

---

## ✨ Features

### 🔐 Authentication

* Secure API authentication using **Laravel Sanctum**
* Protected API routes
* Admin access to Filament dashboard

### 📁 Portfolio Management

* Projects (CRUD)
* Skills (CRUD)
* Profile (name, title, description, photo)
* Entity relationships (projects ↔ skills)

### 📊 Admin Dashboard (Filament)

* Modern UI
* Full data management
* Image uploads
* Roles & permissions (extensible)

---

## 📂 Project Structure

```
app/
 ├── Http/
 │   ├── Controllers/Api
 │   ├── Resources
 │   └── Requests
 ├── Models
 └── Policies

routes/
 ├── api.php

filament/
 ├── Resources
 └── Pages

database/
 ├── migrations
 └── seeders
```

---

## 🔗 API Routes (Examples)

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| GET    | /api/profile       | Get profile    |
| GET    | /api/projects      | List projects  |
| POST   | /api/projects      | Create project |
| PUT    | /api/projects/{id} | Update project |
| DELETE | /api/projects/{id} | Delete project |

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/cms-portfolio.git
cd cms-portfolio
```

### 2️⃣ Install dependencies

```bash
composer install
```

### 3️⃣ Environment configuration

```bash
cp .env.example .env
```

Configure your database inside `.env`

### 4️⃣ Generate app key

```bash
php artisan key:generate
```

### 5️⃣ Run migrations & seeders

```bash
php artisan migrate --seed
```

### 6️⃣ Install Filament

```bash
php artisan filament:install
```

### 7️⃣ Start the server

```bash
php artisan serve
```

---

## 🔑 Admin Dashboard Access

* URL: `http://localhost:8000/admin`
* Create admin user:

```bash
php artisan make:filament-user
```

---

## 📸 Project Preview

> ⚠️ Replace the images below with your own screenshots.

<p align="center">
  <img src="screenshots/projects.png" width="400" />
  <img src="screenshots/profile.png" width="400" />
</p>

---

## 🔒 Security

* API routes protected with `auth:sanctum`
* Request validation using Form Requests
* CORS-ready for separated frontend

---

## 🚀 Future Improvements

* Multi-user support
* Advanced role management
* API caching
* Docker setup
* CI/CD pipeline

---

## 📌 Project Status

🟢 In progress

---

## 🧑‍💻 Git Commit Convention

This project follows a clean and professional **Git commit message convention**:

### Format

```
<type>: <short description>
```

### Types

* `feat:` new feature
* `fix:` bug fix
* `refactor:` code refactoring
* `chore:` tooling or config changes
* `docs:` documentation updates
* `style:` formatting (no logic changes)
* `test:` tests

### Examples

```
feat: initial Laravel API setup with Filament admin
feat: add projects CRUD API
fix: fix project image upload bug
docs: update README documentation
chore: configure CORS for React frontend
```

---

---

## 📄 License

Personal project – free for inspiration
