import useWeather from '../utils/useWeather'
import Navbar from '../components/Navbar'
import bg from '../assets/bg.jpg'

export default function Forecast({ city }) {
  const { forecast, loading, error } = useWeather(city)

  const dailyForecast = forecast?.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  )

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-md mx-auto flex flex-col gap-4 px-4 py-10">

          <h2 className="text-white text-xl font-semibold text-center">
            Prakiraan 5 Hari — {city}
          </h2>

          {loading && (
            <div className="text-center text-white/70 py-10">
              Memuat prakiraan...
            </div>
          )}

          {error && (
            <div className="text-center text-red-300 bg-red-500/20 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {dailyForecast && !loading && dailyForecast.map((item) => (
            <div
              key={item.dt}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between text-white"
            >
              <div>
                <p className="font-medium">
                  {new Date(item.dt_txt).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                  })}
                </p>
                <p className="text-white/60 text-sm capitalize">
                  {item.weather[0].description}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="ikon cuaca"
                  className="w-12 h-12"
                />
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    {Math.round(item.main.temp_max)}°
                  </p>
                  <p className="text-white/50 text-sm">
                    {Math.round(item.main.temp_min)}°
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}