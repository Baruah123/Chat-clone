import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Use the provided API key directly (consider keeping this secure)
const apiKey = "AIzaSyDN8GGpFbOWLV8FWgjGFekSIHJkq9eWPYM";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Ensure the model name is correct
});

// Add safety settings to generationConfig
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_HIGH_AND_ABOVE,
  },
];

class GoogleGenerativeAIResponseError extends Error {
  constructor(message, response) {
    super(message);
    this.name = "GoogleGenerativeAIResponseError";
    this.response = response;
  }
}

function hadBadFinishReason(candidate) {
  return candidate.finishReason === "bad"; // Example condition
}

function formatBlockErrorMessage(response) {
  return `Error with response: ${JSON.stringify(response)}`; // Example formatting
}

function getText(response) {
  return response.candidates[0].text; // Adjust according to your response structure
}

function addHelpers(response) {
  response.text = () => {
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        console.warn(`This response had ${response.candidates.length} candidates. Returning text from the first candidate only.`);
      }
      if (hadBadFinishReason(response.candidates[0])) {
        throw new GoogleGenerativeAIResponseError(`Error: ${formatBlockErrorMessage(response)}`, response);
      }
      return getText(response);
    } else if (response.promptFeedback) {
      throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
    }
    return "";
  };
}

async function runChat(prompt) {
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  try {
    const result = await chat.sendMessage(prompt);
    const response = result.response;

    // Call addHelpers to attach text method to response
    addHelpers(response);

    // Get the generated text using the text method
    const text = response.text();
    console.log("Generated text:", text);
  } catch (error) {
    console.error("Error during chat:", error);
  }
}

export default runChat;
