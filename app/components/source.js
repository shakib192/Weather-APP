"use client";
import React, { useState } from "react";
import Weather from "./components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1468c4eb17f556f3d90f80aa8b071724
`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500">
      <h1 className="text-4xl font-bold mb-6 text-purple-800">Weather App</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-md mr-4"
          placeholder="Enter city name"
        />
        <button
          type="submit"
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
        >
          Get Weather
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}
