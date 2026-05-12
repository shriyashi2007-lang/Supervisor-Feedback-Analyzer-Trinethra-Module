function Textarea({ value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="transcript" className="block text-lg font-medium text-gray-700 mb-2">
        Supervisor Transcript
      </label>
      <textarea
        id="transcript"
        className="w-full h-64 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
        placeholder="Paste the supervisor feedback transcript here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Textarea;