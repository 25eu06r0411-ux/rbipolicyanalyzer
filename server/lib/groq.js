// groq.js

// Groq API client wrapper

class GroqClient {
    constructor(baseUrl, options = {}) {
        this.baseUrl = baseUrl;
        this.options = options;
    }

    async fetch(query, params = {}) {
        const response = await fetch(`${this.baseUrl}/groq`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.options.headers,
            },
            body: JSON.stringify({ query, params }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    }

    // Add more methods as needed, e.g., for authentication, error handling, etc.
}

export default GroqClient;