 Project Video link- https://drive.google.com/file/d/1vvbd29PqoQlwx_do573eiWeBnHiFQlGR/view?usp=sharing

# MERN Stack Application
This project is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The application includes user authentication (login and signup), a landing page with a carousel, and a product search functionality with filters.

## Features
- User Authentication: Users can sign up, log in, and log out. Passwords are securely stored using bcrypt, and JWT is used for authentication.
- Landing Page: After logging in, users are directed to the landing page, which features a carousel of images made using react-slick.
- Product Search and Filter: Users can view a list of products, search for products by jewelry name or jeweler name, and filter products by brand or manufacturer.

## Tech Stack
- Frontend: React.js, react-slick, react-router-dom
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens), bcrypt

## Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/mern-app.git
cd mern-app
Install dependencies:
For the backend:

bash
cd backend
npm install
For the frontend:

bash
cd frontend
npm install
Setup Environment Variables:
Create a .env file in the backend directory and add the following:


Run the application:
Start the backend server:

bash
cd backend
npm start
Start the frontend development server:

bash
cd frontend
npm start
The application should now be running on http://localhost:3000.

## Usage
- Signup: Register a new account using the signup form.
- Login: Log in with your credentials.
- Landing Page: After logging in, you'll be redirected to the landing page featuring a carousel.
- Product Search and Filter: Navigate to the products page to view, search, and filter products.
- Logout: Use the logout button in the navbar to log out.

## Project Structure
- Contains the Express server, routes, models, and controllers.
- models: Mongoose models for MongoDB.
- routes: Express routes for handling API requests.
- controllers: Functions to handle the logic for each route.
- frontend: Contains the React application.
- components: Reusable components such as Navbar, Carousel, and Product cards.
- redux: Redux slices for state management.
- assets: Images and other static assets.

## Dependencies
### Backend
express
mongoose
bcryptjs
jsonwebtoken
dotenv
### Frontend
react
react-dom
react-router-dom
react-redux
@reduxjs/toolkit
react-slick
axios
