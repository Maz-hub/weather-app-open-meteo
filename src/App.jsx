import { useState, useEffect, useRef } from "react";
import HeaderSearch from "./components/HeaderSearch";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  return (
    <>
      <section className="p-4 md:p-6 lg:py-12 lg:px-28">
        <HeaderSearch />
        <div>
          <h1 className="text-preset-2 text-[var(--color-Neutral-0)] text-center px-6 md:px-[140px] my-12 lg:my-16">
            How's the sky looking today ?
          </h1>
        </div>
        <Search />
        <WeatherInfo />
        <WeatherDetails />
      </section>
    </>
  );
};

export default App;
