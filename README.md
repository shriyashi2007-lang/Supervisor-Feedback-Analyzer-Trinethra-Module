# Trinethra Supervisor Feedback Analyzer

A full-stack web application for analyzing supervisor feedback transcripts using AI. The app extracts key insights, provides scoring, and suggests follow-up actions based on the transcript content.

## Features

- **Extracted Evidence**: Identifies important quotes from the transcript and categorizes them as positive, negative, or neutral.
- **Rubric Score**: Provides a score from 1-10 with justification based on transcript evidence.
- **KPI Mapping**: Lists KPIs connected to the transcript.
- **Gap Analysis**: Identifies missing information or areas not covered.
- **Follow-up Questions**: Suggests 3-5 questions for the next supervisor call.

## Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **AI**: Ollama with llama3.2 model
- **Data Storage**: JSON files (no database required)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Ollama installed and running

## Installation and Setup

### 1. Install Ollama

Download and install Ollama from [ollama.ai](https://ollama.ai/).

### 2. Pull the llama3.2 model

```bash
ollama pull llama3.2
```

### 3. Start Ollama server

```bash
ollama serve
```

This starts the Ollama API server on `http://localhost:11434`.

### 4. Clone or download the project

Ensure you have the project files in your workspace.

### 5. Install backend dependencies

```bash
cd backend
npm install
```

### 6. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 7. Start the backend server

```bash
cd backend
npm start
```

The backend will run on `http://localhost:3001`.

### 8. Start the frontend development server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy).

## Usage

1. Open the frontend in your browser (usually `http://localhost:5173`).
2. Paste a supervisor feedback transcript into the textarea.
3. Click "Run Analysis".
4. View the results in the cards below.

## Project Architecture

```
trinethra-supervisor-feedback-analyzer/
├── backend/
│   ├── server.js              # Express server setup
│   ├── routes/
│   │   └── analyze.js         # POST /analyze endpoint
│   ├── utils/
│   │   ├── promptBuilder.js   # Builds prompts for Ollama
│   │   └── jsonParser.js      # Parses JSON responses
│   ├── prompts/
│   │   └── analysisPrompt.txt # Prompt template
│   ├── data/                  # For future JSON file storage
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Main React component
│   │   ├── main.jsx           # React entry point
│   │   ├── index.css          # Tailwind CSS imports
│   │   └── components/
│   │       ├── Header.jsx
│   │       ├── Textarea.jsx
│   │       ├── Button.jsx
│   │       ├── LoadingSpinner.jsx
│   │       ├── AnalysisCards.jsx
│   │       └── ErrorMessage.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## API Endpoints

### POST /analyze

Analyzes a supervisor feedback transcript.

**Request Body:**
```json
{
  "transcript": "The supervisor said the intern is doing well..."
}
```

**Response:**
```json
{
  "evidence": [
    {
      "quote": "doing well",
      "type": "positive"
    }
  ],
  "rubricScore": {
    "score": 8,
    "justification": "Positive feedback on performance"
  },
  "kpiMapping": ["Performance", "Communication"],
  "gapAnalysis": ["No mention of leadership"],
  "followUpQuestions": ["How can we improve leadership skills?"]
}
```

## Hallucination Prevention

To ensure the AI provides accurate and reliable analysis:

- The AI is instructed to use **only** information from the transcript.
- If information is missing, it returns "Not Mentioned" instead of inventing facts.
- The system returns clean JSON only, reducing the chance of extraneous content.
- Error handling and retry logic are implemented for JSON parsing failures.

## Future Improvements

- Add user authentication and session management.
- Implement a database (e.g., MongoDB) for storing analysis history.
- Add data visualization (charts for scores, trends over time).
- Support for multiple AI models or providers.
- Batch processing for multiple transcripts.
- Export functionality for reports (PDF, CSV).
- Real-time collaboration features.
- Integration with external tools or APIs.

## Troubleshooting

- **Frontend not loading**: Ensure the backend is running on port 3001.
- **Analysis fails**: Check that Ollama is running and the llama3.2 model is pulled.
- **CORS errors**: The backend includes CORS middleware to allow frontend requests.
- **JSON parsing errors**: The system includes retry logic; if issues persist, check the Ollama response format.

## Contributing

This is a simple project for demonstration. For production use, consider adding tests, error logging, and security measures.

## License

This project is for educational purposes.