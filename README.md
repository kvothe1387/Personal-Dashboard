# Personal Dashboard

A beautiful, dynamic personal dashboard that displays real-time information including the current time, weather, cryptocurrency prices, and stunning background images.

![Personal Dashboard Screenshot](./images/screenshot.png)

## 🌐 Live Demo

Check out the live version: [https://kvothe1387.github.io/Personal-Dashboard/](https://kvothe1387.github.io/Personal-Dashboard/)

## ✨ Features

- **Dynamic Background**: Random Lego-themed landscape images from Unsplash
- **Real-Time Clock**: Updates every second with current local time
- **Weather Display**: Shows current temperature and weather conditions based on your location
- **Cryptocurrency Tracker**: Displays Ethereum prices including:
  - Current price
  - 24-hour high
  - 24-hour low
- **Location-Based**: Automatically detects your location for accurate weather information

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Async/Await for API calls

## 📡 APIs Used

- [Unsplash API](https://unsplash.com/developers) - Random background images
- [CoinGecko API](https://www.coingecko.com/en/api) - Cryptocurrency data
- [OpenWeatherMap API](https://openweathermap.org/api) - Weather information

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kvothe1387/Personal-Dashboard.git
```

2. Navigate to the project directory:
```bash
cd Personal-Dashboard
```

3. Open `index.html` in your browser or use a local server

### Browser Extension (Optional)

This project can also be used as a Chrome extension to replace your new tab page:

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the project directory
5. Your new tab page will now display the Personal Dashboard

## 📝 Usage

- The dashboard will automatically load when you open the page
- Grant location permission when prompted for accurate weather data
- The time updates automatically every second
- All data refreshes when you reload the page

## 🎨 Customization

You can customize the dashboard by modifying:

- **Background theme**: Change the `query` parameter in the Unsplash API call (line 2 of `index.js`)
- **Cryptocurrency**: Replace "ethereum" with another cryptocurrency slug in the CoinGecko API call (line 13 of `index.js`)
- **Styling**: Edit `index.css` to change colors, fonts, and layout

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Background images provided by Unsplash
- Cryptocurrency data from CoinGecko
- Weather data from OpenWeatherMap
- Project inspired by async JavaScript practice

## 👨‍💻 Author

- GitHub: [David McCullough](https://github.com/kvothe1387)
- LinkedIn: [David McCullough](https://www.linkedin.com/in/davidmcc-webdev/)
- Portfolio: [My Portfolio](https://davidmcc.netlify.app/)