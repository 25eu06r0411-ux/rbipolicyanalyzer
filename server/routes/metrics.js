'use strict';

const express = require('express');
const router = express.Router();

// Hardcoded RBI metrics
const metrics = {
    totalPolicies: 100,
    activePolicies: 75,
    expiredPolicies: 25,
    averageProcessingTime: '2 days',
    lastUpdated: '2026-03-14 13:56:50'
};

// Hardcoded rate history
const rateHistory = [
    { date: '2026-02-01', rate: 3.5 },
    { date: '2026-02-15', rate: 3.7 },
    { date: '2026-02-28', rate: 3.6 },
    { date: '2026-03-01', rate: 3.8 },
    { date: '2026-03-14', rate: 3.9 }
];

// GET /api/metrics endpoint
router.get('/api/metrics', (req, res) => {
    res.json({ metrics, rateHistory });
});

module.exports = router;
