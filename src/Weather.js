import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import EasyDate from "./easyDate";

export default function Weather() {
    return (
        <div className="weather container">
            <form>
                <input type="text" placeholder="Enter a city" className="col-8 search-bar"/>
                <input type="submit" value="Search" className="col-3 center-block" />
            </form>
            <h2 className="default-city">
                Virginia Beach
            </h2>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>
                            <EasyDate />
                        </li>
                        <li>Weather condition will go here.</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                    <li>Humidity goes here</li>
                    <li>Wind Speed goes here</li>
                    </ul>
                </div>
            </div>
            <div className="icon-and-temp">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="temporary weather icon" />
                29ºC | ºF
            </div>
        </div>
    );
}