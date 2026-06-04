import SearchBar from '../components/SearchBar'
import useWeather from '../utils/useWeather'
import Navbar from '../components/Navbar'
import bg from '../assets/bg.jpg'

export default function Home({ city, setCity }) {
  const { weather, loading, error } = useWeather(city)

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
        <div className="max-w-md mx-auto flex flex-col gap-6 px-4 py-10">

          <SearchBar onSearch={setCity} />

          {loading && (
            <div className="text-center text-white/70 py-10">
              Memuat data cuaca...
            </div>
          )}

          {error && (
            <div className="text-center text-red-300 bg-red-500/20 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {weather && !loading && (
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-white flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{weather.name}</h2>
                  <p className="text-white/60 text-sm capitalize">
                    {weather.weather[0].description}
                  </p>
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="ikon cuaca"
                  className="w-16 h-16"
                />
              </div>

              <div className="text-6xl font-thin text-center py-2">
                {Math.round(weather.main.temp)}°C
              </div>

              <div className="grid grid-cols-3 gap-3 mt-2">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-white/50 text-xs mb-1">Terasa</p>
                  <p className="text-sm font-medium">
                    {Math.round(weather.main.feels_like)}°C
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-white/50 text-xs mb-1">Kelembaban</p>
                  <p className="text-sm font-medium">{weather.main.humidity}%</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-white/50 text-xs mb-1">Angin</p>
                  <p className="text-sm font-medium">
                    {Math.round(weather.wind.speed)} m/s
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}