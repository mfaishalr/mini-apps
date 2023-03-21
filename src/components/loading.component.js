export function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /> 
    </svg> Fetching Data...
    </div>
  )
}