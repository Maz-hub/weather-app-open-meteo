import Sunny from "../assets/images/icon-sunny.webp";

const WeatherInfo = () => {
  return (
    <section className="weather-bg mt-8 mb-5">
      <div className="relative z-10 text-Neutral-0 container mx-auto px-4 py-8 text-center">
        <p className="text-preset-4 mb-3">Berlin, Germany</p>
        <p className="text-preset-6">Tuesday, Aug 5, 2025</p>
        <div className="flex items-center gap-5">
          <img src={Sunny} alt="Icon Sunny" className="w-[120px] h-[120px]" />
          <p className="text-preset-1">20°</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;
