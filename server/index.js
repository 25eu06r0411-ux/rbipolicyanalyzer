const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Import routes
const chatRoutes = require('./routes/chat');
const analyzeRoutes = require('./routes/analyze');
const metricsRoutes = require('./routes/metrics');
const impactRoutes = require('./routes/impact');

// Use routes
app.use('/api/chat', chatRoutes);
app.use('/api/analyze', analyzeRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/impact', impactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
