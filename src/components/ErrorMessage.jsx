export default function ErrorMessage({ message }) {
  return (
    <div className="text-center text-red-300 bg-red-500/20 rounded-xl px-4 py-3">
      {message}
    </div>
  )
}