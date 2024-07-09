# Phone Directory Server

A Node.js server to support the React-based phone directory application. This server handles all CRUD operations for managing phones.

## Table of Contents
- [Installation](#installation)
- [Running the Production Server](#running-the-production-server)
- [API Endpoints](#api-endpoints)


## Installation

To get started with the Phone Directory Server, you need to have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/phone-directory-server.git
   ```

2. Navigate to the project directory:

   ```sh
   cd phone-directory-server
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

## Running the Production Server

To start the server in production mode:

1. Start the server:

   ```sh
   npm start
   ```

   The server will be running on the specified port (default is `3000`).

## API Endpoints

Here are the main API endpoints provided by the server:

- **GET /api/phones/**: Fetch all phones, have query for page,sort,model,brand and os
- **GET /api/phones/:id**: Fetch a single Phone by ID
- **POST /api/phones/**: Add a new Phone
- **Patch /api/phones/:id**: Edit an existing Phone
- **DELETE /api/phones/:id**: Delete a Phone
