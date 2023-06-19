import z from "zod";

const Weather = z.object({
  list: z.array(
    z.object({
      dt: z.number(),
      main: z.object({
        temp: z.number(),
        humidity: z.number()
      })
    })
  )
});

export default async function getWeather() {
  const token = process.env.OPENWEATHER_APIKEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=nanjing&units=metric&appid=${token}`;
  if (!token) throw new Error("Please add OPENWEATHER_APIKEY to env");

  try {
    const result = await fetch(url).then((res) => res.json());
    const data = Weather.parse(result).list.map((item) => ({ date: item.dt, ...item.main }));
    return { status: true, data };
  } catch (error) {
    console.error(error);
    return { status: false, message: "Something went wrong while tick a new day!" };
  }
}
