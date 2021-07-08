import React from "react";
import BlockedContents from "../views/BlockedContents/BlockedContents";
import WeatherCard from "../components/WeatherCard/WeatherCard";

export default function Main() {
  return (
    <div>
      <WeatherCard/>
      <BlockedContents/>
    </div>
  );
}
