function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <span className="ml-4 text-lg text-gray-600">Analyzing transcript...</span>
    </div>
  );
}

export default LoadingSpinner;