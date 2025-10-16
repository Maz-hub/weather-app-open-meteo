import Drizzle from "../assets/images/icon-drizzle.webp";
import Fog from "../assets/images/icon-fog.webp";
import Overcast from "../assets/images/icon-overcast.webp";
import Cloudy from "../assets/images/icon-partly-cloudy.webp";
import Rain from "../assets/images/icon-rain.webp";
import Snow from "../assets/images/icon-snow.webp";
import Storm from "../assets/images/icon-storm.webp";
import Sunny from "../assets/images/icon-sunny.webp";

const DailyForecast = () => {
  const forecastCards = {
    Mon: [{ icon: Rain, minTemp: "15", maxTemp: "24" }],
    Tue: [{ icon: Drizzle, minTemp: "14", maxTemp: "20" }],
    Wed: [{ icon: Sunny, minTemp: "15", maxTemp: "21" }],
    Thu: [{ icon: Overcast, minTemp: "14", maxTemp: "24" }],
    Fri: [{ icon: Storm, minTemp: "13", maxTemp: "25" }],
    Sat: [{ icon: Snow, minTemp: "15", maxTemp: "21" }],
    Sun: [{ icon: Fog, minTemp: "16", maxTemp: "25" }],
  };

  return (
    <section className="mt-8">
      <div>
        <p className="text-preset-5 text-Neutral-0 mb-5">Daily Forecast</p>
      </div>
      {/* Forecast cards */}
      <div className="grid grid-cols-3 gap-4">
        {Object.values(forecastCards).map((dayForecast, index) => (
          <div
            key={index}
            className="py-4 px-2.5 bg-Neutral-800 p-5 rounded-xl border border-Neutral-600"
          >
            <p className="text-preset-6 text-Neutral-0 text-center">
              {Object.keys(forecastCards)[index]}
            </p>
            <img
              src={dayForecast[0].icon}
              alt={`${Object.keys(forecastCards)[index]} weather`}
              className="my-4"
            />
            <div className="flex justify-between">
              <p className="text-preset-7 text-Neutral-0">
                {dayForecast[0].minTemp}
              </p>
              <p className="text-preset-7 text-Neutral-200">
                {dayForecast[0].maxTemp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
