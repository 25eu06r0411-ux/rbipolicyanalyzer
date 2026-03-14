const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// POST /api/analyze endpoint for PDF analysis using Groq API
router.post('/api/analyze', async (req, res) => {
    const pdfData = req.body;

    try {
        const response = await fetch('https://api.groq.com/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pdfData),
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'An error occurred while analyzing the PDF' });
        }

        const result = await response.json();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
