import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios.get(
        "https://goweather.herokuapp.com/weather/Seoul"
      );
      setTemperature(result.data.temperature);
      setWind(result.data.wind);
      setDescription(result.data.description);

      const temp = result.data.temperature;
      const TodayTemp = Number(temp.split("").slice(0, 2).join(""));
      console.log(TodayTemp);

      if (TodayTemp >= 20) {
        setExplanation("따뜻한 날입니다 🍃");
      } else if (TodayTemp >= 10) {
        setExplanation("조금 쌀쌀하니 식물 관리에 유의해주세요 🌼");
      } else if (TodayTemp >= 0) {
        setExplanation("온대식물은 실내로 이동해주세요 🪴");
      } else if (TodayTemp < 0) {
        setExplanation("추운 날이라 식물관리에 유의해주세요 ❄️");
      }
    };
    fetchWeather();
  }, []);

  return (
    <div>
      <div>{temperature}</div>
      <div>{wind}</div>
      <div>{description}</div>
      <div>{explanation}</div>
    </div>
  );
}
