const WeatherIcon = ({ icon }) => {
    console.log(icon)
    return (
        <div className="icon_weather">
            <img src={`http://openweathermap.org/img/w/${icon}.png`} width="150" alt="weather" />
        </div>
    )
};

export default WeatherIcon;

