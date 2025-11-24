import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";

export const getAiText = async (req, res) => {
  try {
    const {prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({
        message: "This feature is currently unavailable",
      });
    }
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt, 
    });
    console.log(response.text);

    res.status(200).json(response.text);
  } catch (error) {
    res.status(500).json({
      message: "Error generating text",
      error: error,
    });
    console.log(error);
  }
};
