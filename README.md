# 🍽️ MyFood - Online Food Ordering App

link to see my app : https://ninadkhajone1.github.io/MyFood/  *IMP* [ Remember I have saved Data in Database and git can't access database so data won't be visible , also you can't signup and login until i host it ]

A full-stack food ordering web app built with **React**, **Node.js**, **Express**, and **MongoDB Atlas**.

##  Features
- User Signup & Login (JWT Auth)
- Browse & order food
- Auto-fetch current location
- Cart management
- View past orders
- Responsive UI with Bootstrap 5 Dark

## How It Works

1. **User signs up or logs in**  
   - Credentials are securely stored in MongoDB with hashed passwords.  
   - JWT is issued on login for authentication.

2. **Homepage loads available food items**  
   - Data comes from MongoDB Atlas via Express API.

3. **User adds food to cart and places order**  
   - Cart data is stored in React Context.  
   - On placing order, data is sent to backend and saved in MongoDB.

4. **Order history (My Orders)**  
   - Logged-in users can view their past orders.

5. **Location fetch**  
   - On signup, app fetches user’s location using Geolocation API and reverse geocodes it.


## Behind the Scenes (Short Overview)

- **React Frontend** handles UI, routing, and state (cart, forms).
- **Express Backend** manages authentication, food data, and orders.
- **MongoDB Atlas** stores all users, food items, and orders.
- **Render.com** (or similar) is used for deploying backend API.
- **GitHub Pages** hosts the frontend.


## Behind the Scenes (Short Overview)
React Frontend handles UI, routing, and state (cart, forms).

Express Backend manages authentication, food data, and orders.

MongoDB Atlas stores all users, food items, and orders.

Render.com (or similar) is used for deploying backend API.

GitHub Pages hosts the frontend.



## 🛠 Tech Stack
- **Frontend**: React, React Router, Bootstrap 5
- **Backend**: Node.js, Express, MongoDB Atlas, JWT, bcrypt



