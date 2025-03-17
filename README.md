# Finance-Web-App

Finance-Web-App is a web application that displays real-time prices for Bitcoin, stocks, and gold, as well as the latest financial news. The application fetches data from various APIs and presents it in a user-friendly interface. Built with Node.js and styled using Tailwind CSS, this app provides a seamless experience for users interested in financial markets.

## Features

- **Real-time Data**: Fetches and displays the latest prices for Bitcoin, stocks, and gold.
- **Financial News**: Displays the latest news related to financial markets.
- **API Integration**: Utilizes multiple APIs to gather financial data.

## Installation

To get started with Finance-Web-App, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd finance-web-app
2. **Install dependencies**:
   ```bash
   npm install
3. **Configure API Keys**: You will need to manually enter your API keys in the code for each service:
   - **Bitcoin**: Use [CoinGecko API](https://www.coingecko.com/en/api)
   - **Gold**: Use [GoldAPI.io](https://www.goldapi.io/)
   - **Stocks**: Use [Alpha Vantage](https://www.alphavantage.co/)
   - **News**: Use [NewsAPI.org](https://newsapi.org/)

   Make sure to replace the placeholder API keys in the code with your own.
4. **Run the application**:
   ```bash
   npm run dev

## Usage

Once the application is running, navigate to `http://localhost:5173/` in your web browser to view the real-time prices for Bitcoin, stocks, and gold, as well as the latest financial news.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **APIs**: Fetches data from CoinGecko, GoldAPI.io, Alpha Vantage, and NewsAPI.org.
  
