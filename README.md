# restaurant-booking-bot

restaurant-booking-bot is a LINEBOT service for booking restaurants.

---

## Requirements

- node.js
- npm
- ngrok:
  ngrok is for connecting localhost to https url in testing LINE webhook. [download ngrok](https://ngrok.com/download)

---

## Installation

- clone project
  `git clone https://github.com/s19003045/restaurant-booking-bot.git`
- into project folder
  `cd restaurant-booking-bot`
- install packages
  `npm install`

---

## Configuration

### The `.env` File

Create .env file, and fill variables needed.
For example, set server as webhook for LINE messaging api needs variables in .env:

- LINE_ACCESS_TOKEN=
- LINE_CHANNEL_SECRET=

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

Run ngrok for connecting localhost to https url: `ngrok http 5000`

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

---

## License

[MIT](https://github.com/s19003045/restaurant-booking-bot/blob/main/LICENSE)
