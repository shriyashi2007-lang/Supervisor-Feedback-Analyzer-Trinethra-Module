function Button({ onClick, disabled, children = 'Run Analysis' }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium text-white transition-colors ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;