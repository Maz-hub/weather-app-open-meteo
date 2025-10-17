# Frontend Mentor - Weather app solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown 
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [Vite](https://vite.dev/) - Frontend build tool
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS v4](https://tailwindcss.com/) - For styling

### What I learned

- Built a `WeatherDetails` component using a grid layout with 4 cards to display metrics like "Feels Like," "Humidity," "Wind," and "Precipitation." Used an object to store static data and mapped it with `.map()` to render the cards dynamically.
- Created a `DailyForecast` component with a 7-day forecast, using a nested object structure with day keys and arrays of objects for icons, min, and max temperatures. Applied `Object.values()` and `.map()` to generate the cards and imported weather icons for design.
- Developed an `HourlyForecast` component showing hourly data from 3 PM to 10 PM for a selected day. Used an object with hour keys, arrays of objects for icons and temperatures, and `Object.keys()` with `Object.values()` to display the hours and data. Set up a `weatherIcons.js` file to export icons, reducing import repetition across components.
- Learned to organize assets by creating a `weatherIcons.js` file to centralize icon exports, improving code maintainability.

### Continued development

- Add state management to handle dynamic data updates and user interactions (e.g., search, unit toggling).
- Integrate an API (e.g., Open-Meteo) to fetch real-time weather data.
- Implement responsive design adjustments for various screen sizes.
- Add hover and focus states for interactive elements like the dropdown.

### Useful resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - Helped me understand components and mapping.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Guided me in styling the app efficiently.
- [MDN Web Docs on Objects and Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) - Clarified how to work with nested data structures.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
