const express = require('express');
const cors = require('cors');
const analyzeRoute = require('./routes/analyze');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/analyze', analyzeRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});