# Food Recipe Managment System

## Overview

The Food Recipe Managment System is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to manage academic courses efficiently. The system provides complete CRUD functionality along with bookmarking, filtering, sorting, and dynamic UI updates.

This project demonstrates full-stack architecture, RESTful API development, database modeling, and modular frontend component design.

---

## Features

### Food Recipe Management System (CRUD Operations)

- Create new recipe with validation
- Retrieve and display all recipes
- Update existing recipes details
- Delete recipes with confirmation
- Automatic `createdAt` and `updatedAt` timestamps using Mongoose

### Food Recipe Managment System

- add image in recipe card 
- quicky recipe under 20 min toggle

### Search, Filter and Sort

- Search recipes by name
- quicky recipe under 20
- veg & non-veg toggle

### User Interface

- Responsive layout
- Loading state handling
- Empty state handling
- Clean UI using Tailwind CSS and DaisyUI
- Toast notifications using React Hot Toast



## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- DaisyUI
- Lucide React
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## System Architecture

Client (React Frontend)  
        ↓  
REST API (Express Backend)  
        ↓  
MongoDB Database  

The frontend communicates with the backend using RESTful APIs. The backend processes requests, applies business logic, and interacts with MongoDB using Mongoose models.

---

## CRUD Implementation

### Create
recipes are created using a `POST` request with required field validation before storing in MongoDB.

### Read
recipes are retrieved using `GET` requests and rendered dynamically in a structured card layout.

### Update
recipes details are modified using `PUT` requests. The `updatedAt` field is automatically managed through Mongoose timestamps.

### Delete
recipes are permanently removed using `DELETE` requests after confirmation.

---

## API Endpoints

```
GET     /Recipes
GET     /Recipes/:id
POST    /Recipes
PUT     /Recipes/:id
DELETE  /Recipes/:id

```

---

## Database Schema

Each course document includes:

- title (String)
- ingredients (String)
- instructions (String)
- time (Number)
- coverimage (Number)
- difficulty (String)
- cuisine (string)
- servings (servings)
- vegetarian(boolean)
- createdAt (Date)
- timestamp (bolean)
- updatedAt (Date)

---

## Project Structure

```
Recipe-Managment System/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── courseController.js
│   │   ├── models/
│   │   │   └── courseModel.js
│   │   ├── routes/
│   │   │   └── courseRoutes.js
│   │------server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── RecipeCard.jsx
│   │   │   
│   │   │
│   │   ├── pages/
│   │   │   ├── createRecipe.jsx
│   │   │   ├── editiRecipe.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── QuickRecipe.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── recipeApi.js
│   │   │   
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## Installation and Setup

### Backend Setup

```
cd backend
npm install
npm start
```

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## Learning Outcomes

- Full Stack MERN development
- REST API design and implementation
- Database schema modeling using Mongoose
- React state management
- Event handling and propagation
- Conditional rendering
- Dynamic UI updates without page reload
- Modular project structuring

---

## Author

SHRADDHA BATULE..
