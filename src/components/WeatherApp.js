import React, { useState, useEffect } from "react";
import "../views/styles.css"
import SearchBar from "./SearchBar";
import Display from "./Display";

const api = {
    key: 'd78fd1588e1b7c0c2813576ba183a667',
    base: 'https://api.openweathermap.org/data',
}

export default function InputSearch({ defaultCity, defaultCountry, defaultDesc, defaultTemp, defaultSpeed, defaultCloud }) {
    const [searchValue, setSearchValue] = useState("");
    const [weather, setWeather] = useState({});

    useEffect(() => {
        searchPressed();
    }, []);

    useEffect(() => {
        const body = document.querySelector('body');
        if (weather.main && weather.main.temp) {
            if (weather.main.temp > 30) {
                body.classList.add('hot');
                body.classList.remove('cold');
            } else {
                body.classList.remove('hot');
                body.classList.add('cold');
            }
        }
    }, [weather]);

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const searchPressed = async () => {
        let query = searchValue;
        if (searchValue === "") {
            query = "Ho Chi Minh";
        }
        const data = await fetch(`${api.base}/2.5/weather?q=${query}&units=metric&appid=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setWeather(result);
                if (result.cod === '404') {
                    alert("Not found");
                }
            })
    }

    return (
        <>
            <div id="weather">
                <SearchBar value={searchValue} onChange={handleSearch} onClick={searchPressed} />
                <Display
                    city={weather.name || 'undefined'}
                    country={weather.sys?.country || 'undefined'}
                    shortDesc={weather.weather && weather.weather.length > 0 ? weather.weather[0].main : ''}
                    temp={weather.main && weather.main.temp ? weather.main.temp : defaultTemp}
                    eye={weather.visibility}
                    wind={weather.wind && weather.wind.speed ? weather.wind.speed : defaultSpeed}
                    cloud={weather.clouds && weather.clouds.all ? weather.clouds.all : defaultCloud} />
            </div>
        </>
    )
}
