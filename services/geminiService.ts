import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for Dr. Rowena’s Dental Clinic in Goa.
Your role is to assist patients with general inquiries about dental procedures, clinic information, and scheduling.

Key Information about the Clinic:
- Location: Dentist Madonna Building, Above Post Office, Cansaulim Market, Goa.
- Doctor: Dr. Rowena (Lead Dentist).
- Services: General Dentistry, Restorative Treatments, Cosmetic Dentistry, Diagnostics.
- Key Values: Professional, gentle, modern, ethical, and patient comfort.
- Areas Served: Cansaulim and nearby regions across Goa.

Restrictions:
- DO NOT provide specific medical advice or diagnoses. Always recommend a consultation.
- If asked about prices, say that it depends on the individual treatment plan and recommend a visit for an accurate quote.
- Be brief, polite, and welcoming.

Tone:
- Gentle, reassuring, and professional.
- Focus on "pain-free" and "comfortable" experiences.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};