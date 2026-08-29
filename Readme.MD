# Parallax

A full-stack blogging platform built with Angular and NestJS.

Parallax is a portfolio project focused on demonstrating practical full-stack TypeScript development, with a clear separation between the Angular client and NestJS REST API.

## Tech Stack

### Client

![Angular](https://img.shields.io/badge/Angular-17-DD0031?logo=angular\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwindcss\&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex\&logoColor=white)

### Server

![NestJS](https://img.shields.io/badge/NestJS-10-E0234E?logo=nestjs\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql\&logoColor=white)

## Architecture

```text
Angular Client
      │
      │ HTTP / REST
      ▼
 NestJS API
      │
      ▼
   Prisma
      │
      ▼
 PostgreSQL
```

## Project Structure

```text
parallax/
├── client/     # Angular application
└── server/     # NestJS REST API
```

## Core Features

* User registration and authentication
* Blog post management
* Create, edit and delete posts
* Individual post pages
* Image uploads
* PostgreSQL persistence
* REST API
* Authentication and authorization

## Getting Started

Clone the repository and install the dependencies for both applications.

### Client

```bash
cd client
npm install
npm start
```

### Server

```bash
cd server
npm install
npm run start:dev
```

Environment variables and database setup will be documented as the backend is implemented.

## Status

🚧 **In development**

Parallax is being developed incrementally, starting with the Angular client and NestJS backend foundation.

## License

This project is for educational and portfolio purposes.

```
```
