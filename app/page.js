"use client";
import React, { useState } from "react";
import Weather from "./components/Weather";

const page = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const fetchWeather = async () => {
    const response =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1468c4eb17f556f3d90f80aa8b071724
      `);

    const data = await response.json();
    setWeatherData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500 ">
      <h1 className="text-4xl font-bold mb-4 text-white"> Weather App</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          className="p-2 rounded-md mr-4 text-blue-500 "
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          type="submit"
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
        >
          Get Weather
        </button>
      </form>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default page;
