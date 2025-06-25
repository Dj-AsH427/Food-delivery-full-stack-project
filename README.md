# 🍕 Food Delivery App

A full-stack food delivery application with customer-facing frontend, admin panel, and backend API. Built with React, Node.js, Express.js, MongoDB, jwt, bcrypt,and other essential packages.

## 🚀 Features

### Customer Features
- **Browse Food Items**: View food items with images, descriptions, and prices
- **Category Filtering**: Filter food items by categories (Salad, Rolls, Desserts, etc.)
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Sign up, login, and profile management
- **Order Management**: Place orders and track order history
- **Payment Integration**: Stripe payment processing
- **Responsive Design**: Works on desktop and mobile devices

### Admin Features
- **Food Management**: Add, edit, and delete food items
- **Order Management**: View and manage customer orders
- **Image Upload**: Upload food images with drag-and-drop interface
- **Dashboard**: Overview of orders and food items

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Notifications
- **Stripe.js** - Payment processing

### Admin Panel
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
food-del/
├── frontend/                 # Customer-facing React app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── Context/        # React context for state management
│   │   └── assets/         # Static assets and images
│   └── package.json
├── admin/                   # Admin panel React app
│   ├── src/
│   │   ├── components/     # Admin UI components
│   │   ├── pages/         # Admin page components
│   │   └── assets/        # Admin assets
│   └── package.json
├── backend/                # Node.js API server
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── uploads/          # Uploaded images
│   └── server.js         # Main server file
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd food-del
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install Admin Panel Dependencies**
   ```bash
   cd ../admin
   npm install
   ```

### Environment Setup

1. **Backend Environment Variables**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

2. **Frontend Environment Variables**
   Create a `.env` file in the `frontend` directory:
   ```env
   VITE_API_URL=http://localhost:4000
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run server
   ```
   The API will be available at `http://localhost:4000`

2. **Start the Frontend (Customer App)**
   ```bash
   cd frontend
   npm run dev
   ```
   The customer app will be available at `http://localhost:5173`

3. **Start the Admin Panel**
   ```bash
   cd admin
   npm run dev
   ```
   The admin panel will be available at `http://localhost:5174`

## 📱 API Endpoints

### Authentication
- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/verify` - Verify user token

### Food Items
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (admin only)
- `PUT /api/food/edit/:id` - Edit food item (admin only)
- `DELETE /api/food/remove/:id` - Delete food item (admin only)

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user's cart

### Orders
- `POST /api/order/place` - Place new order
- `GET /api/order/userorders/:userId` - Get user's orders
- `GET /api/order/list` - Get all orders (admin only)

## 🔧 Configuration

### Database
The app uses MongoDB. Make sure to:
1. Set up a MongoDB database (local or cloud)
2. You can also store the `MONGODB_URI` in your backend `.env` file
3. The app will automatically create the necessary collections

### Stripe Payment
To enable payments:
1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Add the keys to your environment variables
4. Store the key in `.env` file.
5. Update the frontend with your Stripe public key.

### Image Upload
Food images are stored in the `backend/uploads` directory. Make sure the directory exists and has write permissions.

## 🎨 Customization

### Styling
- Frontend styles are in `frontend/src/components/*/ComponentName.css`
- Admin styles are in `admin/src/components/*/ComponentName.css`
- Global styles are in `index.css` files

### Food Categories
Update the `menu_list` in `frontend/src/assets/assets.js` to modify available categories.

### Currency
Change the currency symbol in `frontend/src/Context/StoreContext.jsx` (currently set to ₹).
