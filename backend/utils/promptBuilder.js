// Build the prompt for Ollama
function buildPrompt(transcript) {
  const prompt = `You are an AI assistant analyzing a supervisor feedback transcript.

Use only the information from the transcript.
Do not invent facts.
If something is not mentioned, say "Not Mentioned".
Return clean JSON only, no extra text.

Required JSON format:
{
  "evidence": [
    {
      "quote": "exact quote from transcript",
      "type": "positive" | "negative" | "neutral"
    }
  ],
  "rubricScore": {
    "score": 1-10,
    "justification": "short explanation using transcript evidence"
  },
  "kpiMapping": ["list of KPIs connected to transcript"],
  "gapAnalysis": ["list of missing information, e.g., 'No mention of leadership'"],
  "followUpQuestions": ["3-5 suggested questions for next call"]
}

Transcript:
${transcript}

Output JSON:`;

  return prompt;
}

module.exports = { buildPrompt };