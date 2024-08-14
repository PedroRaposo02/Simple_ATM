# Simple ATM Project

This project is a simple ATM (Automated Teller Machine) application that consists of a Next.js frontend, a Go backend, and a PostgreSQL database.

## Features

- User authentication: Users can create an account, log in, and log out.
- Account management: Users can view their account balance, deposit funds, and withdraw funds.
- Transaction history: Users can view their transaction history, including details such as date, time, and transaction type.

## Technologies Used

- Frontend: Next.js
- Backend: Go
- Database: PostgreSQL

## Setup Instructions

1. Clone the repository: `git clone https://github.com/PedroRaposo02/Simple_ATM.git`
2. Navigate to the project directory: `cd Simple_ATM`
3. Install dependencies:
  - For the frontend, navigate to the `frontend` directory and run `npm install`.
  - For the backend, navigate to the `backend` directory and run `go mod download`.
4. Configure the database:
  - Create a PostgreSQL database and update the database connection details in the backend's configuration file.
  - Run the database migration scripts provided in the `backend/migrations` directory to set up the required tables.
5. Start the application:
  - For the frontend, navigate to the `frontend` directory and run `npm run dev`.
  - For the backend, navigate to the `backend` directory and run `go run main.go`.
6. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
