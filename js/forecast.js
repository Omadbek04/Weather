const KEY = "96b947a45d33d7dc1c49af3203966408";

// get request

const getDataWether = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const quarey = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true);
  const requset = await fetch(base + quarey);
  const data = await requset.json();
  loader(false);
  return data;
};
// const result = getDataWether("London").then((data) => console.log(data));
