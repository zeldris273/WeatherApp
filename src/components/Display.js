import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Display({ city, country, shortDesc, temp, eye, wind, cloud,
    defaultCity, defaultCountry, defaultDesc, defaultTemp }) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    return (
        <div className="content">
            <h1 className="capital">
                <span className="city">{city || defaultCity}</span>
                <span> ,</span>
                <span className="country">{country || defaultCountry}</span>
            </h1>

            <div className="time">{formattedDate}, {formattedTime}</div>
            <div className="temperature">
                <span className="value">{Math.round(temp) || defaultTemp} <sup>o</sup>C</span>
            </div>

            <div className="short-desc">{shortDesc || defaultDesc}</div>
            <div className="more-desc">
                <div className="visibility">
                    <i className="far fa-eye"></i>
                    <span>{eye + ' (m)'}</span>
                </div>
                <div className="visibility">
                    <i className="fas fa-wind"></i>
                    <span>{wind + ' (m/s)'}</span>
                </div>
                <div className="visibility">
                    <i className="fas fa-sun"></i>
                    <span>{cloud + ' %'}</span>
                </div>
            </div>
        </div>
    );
}
