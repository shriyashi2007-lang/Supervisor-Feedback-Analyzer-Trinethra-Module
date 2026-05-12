// Parse JSON from Ollama response
function parseJson(text) {
  try {
    // Remove any leading/trailing whitespace
    const trimmed = text.trim();

    // Find the JSON object (assuming it's the first { to last })
    const start = trimmed.indexOf('{');
    const end = trimmed.lastIndexOf('}');

    if (start === -1 || end === -1 || start > end) {
      throw new Error('No JSON object found');
    }

    const jsonString = trimmed.substring(start, end + 1);

    // Parse the JSON
    const parsed = JSON.parse(jsonString);

    // Basic validation
    if (!parsed.evidence || !parsed.rubricScore || !parsed.kpiMapping || !parsed.gapAnalysis || !parsed.followUpQuestions) {
      throw new Error('Invalid JSON structure');
    }

    return parsed;
  } catch (error) {
    console.error('JSON parsing error:', error.message);
    // Return a default error structure
    return {
      error: 'Failed to parse response',
      evidence: [],
      rubricScore: { score: 0, justification: 'Error parsing AI response' },
      kpiMapping: [],
      gapAnalysis: [],
      followUpQuestions: []
    };
  }
}

module.exports = { parseJson };