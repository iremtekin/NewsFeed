import React, { useEffect, useState } from "react";
import axios from "axios";
const APIKEY = "ea3d677e63a9216569fffaccc8fa18e5";
import {usePosition} from "use-position";
import { Card, CardActions} from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import WeatherCardHelper from "../WeatherCardHelper/WeatherCardHelper";

export default function WeatherCard() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const lang = navigator.language.split("-")[0];

  const getWeatherData = async (lat,lon) => {
    try{
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=${lang}&units=metric`);
      setWeather(data);
    }catch (error)
    {
      console.log(error)
    }
  }

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude,longitude);
  },[latitude,longitude])

  console.log(weather);

  return (
    <div align={"center"}>
      <GridContainer>
        <div align={"center"}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardActions>
                <div align={"center"}>
                  <GridItem xs={12} sm={12} md={12}>
                    <div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardActions>
                              <GridItem xs={12} sm={12} md={12}>
                                <WeatherCardHelper weather={weather}/>
                              </GridItem>
                            </CardActions>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </GridItem>
                </div>
              </CardActions>
            </Card>
          </GridItem>
        </div>
      </GridContainer>
    </div>
  );
}


