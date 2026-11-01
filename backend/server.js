const express = require('express');
const cors = require('cors');
const analyzeRoute = require('./routes/analyze');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Routes
app.use('/analyze', analyzeRoute);

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
