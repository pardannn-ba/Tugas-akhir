export default function ForecastCard({ item }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between text-white">
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
  )
}