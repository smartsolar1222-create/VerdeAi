// api/gemini.js
import OpenAI from '@gemini-ai/client'; // Gemini API client

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'No input provided' });
  }

  try {
    // Create Gemini client with your API key
    const client = new OpenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Call Gemini
    const response = await client.responses.create({
      model: 'gemini-1.5',
      input,
    });

    // Send back the output text
    res.status(200).json({ result: response.output_text || response });
  } catch (err) {
    console.error('Gemini API error:', err);
    res.status(500).json({ error: 'Gemini API error' });
  }
}
