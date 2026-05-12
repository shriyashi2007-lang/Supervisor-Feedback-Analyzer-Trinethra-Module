import { useState } from 'react';
import Header from './components/Header';
import Textarea from './components/Textarea';
import Button from './components/Button';
import LoadingSpinner from './components/LoadingSpinner';
import AnalysisCards from './components/AnalysisCards';
import ErrorMessage from './components/ErrorMessage';

function App() {
  // State for transcript input
  const [transcript, setTranscript] = useState('');
  // State for analysis result
  const [analysis, setAnalysis] = useState(null);
  // State for loading
  const [loading, setLoading] = useState(false);
  // State for error message
  const [error, setError] = useState('');

  // Handle analyze button click
  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    setAnalysis(null);

    try {
      const response = await fetch('http://localhost:3001/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript }),
      });

      const data = await response.json();

      if (response.ok) {
        setAnalysis(data);
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to connect to the backend server. Make sure it is running.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 max-w-4xl">
        <Textarea value={transcript} onChange={setTranscript} />
        <div className="mt-4">
          <Button onClick={handleAnalyze} disabled={!transcript.trim() || loading}>
            Run Analysis
          </Button>
        </div>
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {analysis && <AnalysisCards analysis={analysis} />}
      </div>
    </div>
  );
}

export default App;