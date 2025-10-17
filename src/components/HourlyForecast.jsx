import DropdownIcon from "../assets/images/icon-dropdown.svg";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Fog from "../assets/images/icon-fog.webp";
import Overcast from "../assets/images/icon-overcast.webp";
import Cloudy from "../assets/images/icon-partly-cloudy.webp";
import Rain from "../assets/images/icon-rain.webp";
import Snow from "../assets/images/icon-snow.webp";
import Storm from "../assets/images/icon-storm.webp";
import Sunny from "../assets/images/icon-sunny.webp";

const HourlyForecast = () => {
  const hourlyData = {
    "3 PM": [{ icon: Cloudy, temp: "20" }],
    "4 PM": [{ icon: Overcast, temp: "21" }],
    "5 PM": [{ icon: Sunny, temp: "20" }],
    "6 PM": [{ icon: Cloudy, temp: "18" }],
    "7 PM": [{ icon: Snow, temp: "19" }],
    "8 PM": [{ icon: Drizzle, temp: "20" }],
    "9 PM": [{ icon: Snow, temp: "22" }],
    "10 PM": [{ icon: Cloudy, temp: "22" }],
  };

  return (
    <section className="mt-8 bg-Neutral-800 rounded-[20px] py-5 px-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-preset-5 text-Neutral-0">Hourly forecast</p>
        <div className="flex items-center py-2 px-4 bg-Neutral-600 rounded-md">
          <p className="text-preset-7 text-Neutral-0 mr-3">Tuesday</p>
          <img
            src={DropdownIcon}
            alt="Dropdown Icon for Units search"
            className="w-[9px] md:w-3 h-3.5 md:h-4.5 cursor-pointer"
          />
        </div>
      </div>
      <div>
        {Object.values(hourlyData).map((hourForecast, index) => (
          <div
            key={index}
            className="flex justify-between items-center pl-3 pr-4 py-2.5 rounded-[8px] bg-Neutral-700 border-1 border-Neutral-600 mt-4"
          >
            <div className="flex items-center">
              <img
                src={hourForecast[0].icon}
                alt={`${Object.keys(hourlyData)[index]} weather`}
                className="w-12 h-12 mr-3"
              />
              <p className="text-preset-5-medium text-Neutral-0">
                {Object.keys(hourlyData)[index]}
              </p>
            </div>
            <p className="text-preset-7 text-Neutral-0">
              {hourForecast[0].temp}°
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
