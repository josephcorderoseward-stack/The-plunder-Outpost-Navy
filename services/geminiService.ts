
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generatePirateLore = async (subject: string, type: 'ship' | 'pirate' | 'guild') => {
  const ai = getAI();
  const prompt = `Write a short, cinematic, epic pirate lore snippet for a ${type} named "${subject}" in the world of Sea of Thieves. Use nautical slang, mention specific regions like The Shores of Plenty or The Devil's Roar, and make it sound legendary. Keep it under 100 words.`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Lore generation failed:", error);
    return "The seas kept their secrets this time... try again when the wind changes.";
  }
};

export const generateVoyageSummary = async (keywords: string[]) => {
  const ai = getAI();
  const prompt = `Create a short 'Captain's Log' entry for a Sea of Thieves voyage involving: ${keywords.join(', ')}. Make it sound like it was written by a salty pirate who barely survived.`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return "Log entry lost to the locker.";
  }
};
