const express = require('express');
const router = express.Router();

/**
 * @api {post} /api/chat Chat with Groq
 * @apiGroup Chat
 * @apiDescription Stream Groq responses using Server-Sent Events.
 */
router.post('/', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Simulated Groq response stream
    const chatResponses = [
        'Welcome to the chat!',
        'How can I assist you today?',
        'Here are some options you can select from:',
    ];

    chatResponses.forEach((response, index) => {
        setTimeout(() => {
            res.write(`data: ${response}\n\n`);
            if (index === chatResponses.length - 1) {
                res.write('event: close\n\n');
                res.end();
            }
        }, index * 1000); // Simulate delay
    });
});

module.exports = router;