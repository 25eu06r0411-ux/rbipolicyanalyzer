const fs = require('fs');
const pdf = require('pdf-parse');

async function extractTextFromPDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    try {
        const data = await pdf(dataBuffer);
        return data.text;
    } catch (error) {
        console.error('Error extracting PDF text:', error);
        throw error;
    }
}

module.exports = extractTextFromPDF;