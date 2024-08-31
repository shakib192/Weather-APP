"use client";

import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-w-sm mx-auto">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-xl">
        {data.weather && data.weather[0]
          ? data.weather[0].description
          : "City not Found"}
      </p>
      <p className="text-3xl">
        {data.main ? Math.round(data.main.temp) : ""}°C
      </p>
    </div>
  );
};

export default Weather;
