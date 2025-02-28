# PR-6-MovieMulterProject

Movie Management System

📌 Project Overview

This is a Movie Management System built using Node.js, Express, MongoDB, and EJS. It allows administrators to manage movies, including adding, updating, and deleting records.

🚀 Features

User Authentication (Login, Register, Logout)

Admin Panel for Managing Movies

File Uploads for Movie Posters

Secure Cookie-based Authentication

Middleware for Access Control

Client and Admin Routing

🛠 Tech Stack

Backend: Node.js, Express.js, MongoDB (Mongoose)

Frontend: EJS, HTML, CSS

Middleware: Multer, Cookie-Parser, Body-Parser
🔧 Installation & Setup

1️⃣ Clone the Repository

2️⃣ Install Dependencies

3️⃣ Set Up MongoDB Connection Make sure MongoDB is running and update configs/database.js with your database URL:

4️⃣ Start the Server : Server will start at "http://localhost:8095"

🔑 Authentication

Register: /register

Login: /login

Logout: /logout

🎬 Movie Management

View Movies: /viewMovies

Add New Movie: /movieForm

Edit Movie: /edit/:id

Delete Movie: /delete/:id

