import React from "react";
import axios from "Axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import EasyDate from "./easyDate";

export default function Weather() {
    let apiKey = "3b69d9e884899e81040ee4e357f33f8b";
    let apiUrl = `api.openweathermap.org/data/2.5/weather?q=Virginia Beach&appid=${apiKey}`;

    return (
        <div className="weather container">
            <form>
                <input type="text" placeholder="Enter a city" className="col-8 search-bar" autoFocus="on"/>
                <input type="submit" value="Search" className="col-3" />
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
            <div className="row">
                <div className="icon-and-temp">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="temporary weather icon" />
                    <span className="temperature">29</span><span className="unit">ºC | ºF</span>
                </div>
            </div>
        </div>
    );
}