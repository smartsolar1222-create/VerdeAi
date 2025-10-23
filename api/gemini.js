import OpenAI from '@gemini-ai/client';

export default async function handler(req, res) {
  const apiKey = process.env.GEMINI_API_KEY;

  const client = new OpenAI({ apiKey });

  const response = await client.responses.create({
    model: "gemini-1.5",
    input: "Hello from VerdeAi!"
  });

  res.status(200).json(response);
}
