const {Router} = require('express');
const axios = require('axios');



const router = Router();

const API_KEY = process.env.SIGHT_API_KEY;
const APP_USER = process.env.SIGHT_APP_USER;

async function verifyDeepfake(imageUrl) {
    try {
        const response = await axios.get(
            'https://api.sightengine.com/1.0/check.json',{
                params: {
                    'url': imageUrl,
                    'models': 'genai',
                    'api_user': APP_USER,
                    'api_secret': API_KEY,
            }}
        )

        return response.data;
    } catch (error) {
        console.error('Error verifying deepfake:', error);
        throw error;
    }
}

router.post('/verify', async (req, res) => {
    const { imageUrl } = req.body;
    try {
        const result = await verifyDeepfake(imageUrl);
        const socre = result.type.ai_generated;
        if(socre > 0.5){
            result.verdict = 'fake';
        }else{
            result.verdict = 'real';
        }
        res.json(result.verdict);
    } catch (error) {
        res.status(500).json({ error: 'Failed to verify deepfake' });
    }
});


module.exports = router;
