import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import CurrencyCard from "../components/CurrencyCard/CurrencyCard";
import NewsFeed from "../views/NewsFeed/NewsFeed";

export default function Main() {
  return (
    <div>
      <WeatherCard/>
      <CurrencyCard/>
      <NewsFeed/>
    </div>
  );
}
