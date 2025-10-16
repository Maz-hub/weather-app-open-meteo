const WeatherDetails = () => {
  // Array of card data (static for now, can be replaced with API data later)
  const weatherCards = [
    { label: "Feels Like", value: "18°" },
    { label: "Humidity", value: "46%" },
    { label: "Wind", value: "14 km/h" },
    { label: "Precipitation", value: "0 mm" },
  ];

  return (
    <section className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
      {weatherCards.map((card, index) => (
        <div
          key={index}
          className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600"
        >
          <p className="text-preset-6 text-Neutral-200">{card.label}</p>
          <br />
          <p className="text-preset-3 text-Neutral-0">{card.value}</p>
        </div>
      ))}
    </section>
  );
};

export default WeatherDetails;
