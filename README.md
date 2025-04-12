# 🔐 Advanced NestJS Authentication & Authorization System

A full-featured authentication and authorization system built with **NestJS** and **TypeORM**.  
Perfect for production-ready SaaS platforms, admin panels, or any application requiring robust access control and security.

---

## 🚀 Features

### 🧾 Registration & Login
- Register with email and password
- Login with **JWT**
- Email activation with link or code
- **OTP login** (One-time password via email or SMS)

### 🔐 Two-Factor Authentication (2FA)
- Google Authenticator or SMS OTP
- Enable/Disable by user preference

### 👥 Roles & Permissions (RBAC)
- Predefined roles: `Admin`, `User`, `Moderator`
- Role-based route guards
- Fine-grained permission control per endpoint

### 🔁 Session Management
- View active user sessions
- Invalidate specific sessions (logout from other devices)

### 🛡️ Security
- Passwords hashed with `bcrypt`
- Security notifications for new device or IP login
- Suspicious login detection (e.g. unusual locations)

### 🔑 Password Management
- Change password
- Forgot password
- Reset password with secure, time-limited token

---

## 📦 Tech Stack

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/) or [SQLite](https://www.sqlite.org/)
- [JWT](https://jwt.io/)
- [Google Authenticator](https://github.com/google/google-authenticator)
- [class-validator](https://github.com/typestack/class-validator)
- [dotenv](https://github.com/motdotla/dotenv)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nestjs-auth-system.git
cd nestjs-auth-system
