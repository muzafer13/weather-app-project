const apiKey = "f726827e1d816ebd5462686b3a091344";

const getWeather = async (city) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export default getWeather;
