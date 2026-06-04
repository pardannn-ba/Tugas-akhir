export default function LoadingSpinner() {
  return (
    <div className="text-center py-10">
      <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-3" />
      <p className="text-white/60 text-sm">Memuat data...</p>
    </div>
  )
}