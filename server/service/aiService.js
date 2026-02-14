const { Router } = require('express');
const { GoogleGenAI } = require('@google/genai');
const router = Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});



async function generateAIResponse(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
          
        });
        return response.text;
    } catch (error) {
        console.error('Error generating AI response:', error);
        throw error;
    }
}


router.post("/questions", async (req, res) => {
    const { skills, experiance } = req.body;
    const prompt = `Give me 5 multiple question by the giving skills and experience of the candidate. Skills: ${skills}. Experience: ${experiance}. Note: make the question in json format with the following structure: { "question": "question text", "options": ["option1", "option2", "option3", "option4"], "answer": "correct option" no explanation needed.}`;
    const respo = await generateAIResponse(prompt);
    res.json({ message: respo });
});


module.exports = router;


