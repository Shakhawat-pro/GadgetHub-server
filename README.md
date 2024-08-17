# GadgetHub Backend

## Overview

GadgetHub Backend is the server-side application for the GadgetHub e-commerce platform. It provides API endpoints to interact with product data stored in MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- CORS
- dotenv

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shakhawat-pro/GadgetHub-server.git
   cd gadgethub-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```env
   DB_USER=your_mongodb_username
   DB_PASS=your_mongodb_password
   ```

   Replace `your_mongodb_username` and `your_mongodb_password` with your MongoDB Atlas credentials.

### Running the Application

Start the server:

```bash
npm start
```

The server will run on `http://localhost:5000`.

### API Endpoints

- **GET** `/product`  
  Fetch a list of products with optional filters and pagination.

  **Query Parameters:**
  - `brand` (string) - Filter by brand.
  - `category` (string) - Filter by category.
  - `priceMin` (number) - Minimum price filter.
  - `priceMax` (number) - Maximum price filter.
  - `search` (string) - Search term for product name.
  - `sort` (string) - Sorting option (`priceLowHigh`, `priceHighLow`, `dateNewest`).
  - `page` (number) - Page number for pagination.
  - `limit` (number) - Number of items per page.

- **GET** `/product/:id`  
  Fetch a single product by its ID.

  **Path Parameters:**
  - `id` (string) - The ID of the product to fetch.

### Deployment

For deployment, you can use various platforms like Heroku, Vercel, or AWS. Ensure that the `.env` file is configured correctly on the deployment environment.


### Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements!

### Contact

For any questions, please contact [shakhawat.dev.pro@gmail.com](mailto:shakhawat.dev.pro@gmail.com).
```
