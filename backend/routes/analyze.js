const express = require('express');
const router = express.Router();
const axios = require('axios');
const { buildPrompt } = require('../utils/promptBuilder');
const { parseJson } = require('../utils/jsonParser');

// POST /analyze
router.post('/', async (req, res) => {
  const { transcript } = req.body;

  // Validate input
  if (!transcript) {
    return res.status(400).json({ error: 'Transcript is required' });
  }

  // Build the prompt
  const prompt = buildPrompt(transcript);

  try {
    // Call Ollama API
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3.2',
      prompt: prompt,
      stream: false
    });

    // Parse the response
    let analysis = parseJson(response.data.response);

    // If parsing failed, retry once
    if (!analysis || analysis.error) {
      console.log('Parsing failed, retrying...');
      const retryResponse = await axios.post('http://localhost:11434/api/generate', {
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      });
      analysis = parseJson(retryResponse.data.response);
    }

    // If still failed, return error
    if (!analysis || analysis.error) {
      return res.status(500).json({ error: 'Failed to parse AI response' });
    }

    res.json(analysis);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to analyze transcript' });
  }
});

module.exports = router;