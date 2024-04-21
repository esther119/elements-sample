const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

const defaultSystemPrompt = {
  role: "system",
  content: `You are an image text generator. You take input text and generate image text.

    The text should consist of 10 short descriptions for one animal, one scenery, and one art style. The sticker should look good on a laptop and feature an animal. Use commas to separate.

    - Example input: "I'm direct and very brave to speak up for myself when I need to."
    - Example output: "Majestic lion, powerful stance, lush savanna, acacia trees, vibrant watercolor, fluid strokes, earthy tones, splashes of color, expressive brushwork, whimsical charm."
    `,
};

app.post("/generate-chat", async (req, res) => {
  try {
    // Extracting the messages from the request body
    let { messages } = req.body;

    // Ensure messages is an array, prepend default system prompt
    messages = Array.isArray(messages)
      ? [defaultSystemPrompt, ...messages]
      : [defaultSystemPrompt];

    // Calling OpenAI API to generate a chat completion
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    // Sending the completion back as a response
    res.json(completion.choices[0]);
  } catch (error) {
    console.error("Failed to generate chat completion:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/generate-image", async (req, res) => {
  const { description } = req.body;
  try {
    console.log("start generate images");
    const response = await openai.images.generate({
      prompt: `Generate an image of: ${description}`,
      n: 1,
      size: "1024x1024",
    });
    console.log("responses", response);

    // Assuming the response format includes the URL in a similar structure as before
    const imageUrl = response.data[0].url;
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post("/generate-chat-and-image", async (req, res) => {
  try {
    // Extracting the messages from the request body
    let { messages } = req.body;

    // Ensure messages is an array, prepend default system prompt
    messages = Array.isArray(messages)
      ? [defaultSystemPrompt, ...messages]
      : [defaultSystemPrompt];

    // Calling OpenAI API to generate a chat completion
    const chatCompletion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-4-turbo",
    });

    // Extracting text output from chat completion
    const textOutput = chatCompletion.choices[0].message.content.trim();
    console.log("textOutput", textOutput);

    // Use chat completion output as a prompt for image generation
    const imageResponse = await openai.images.generate({
      prompt: `Create a sticker: ${textOutput}. No words.`,
      n: 1,
      size: "1024x1024",
    });

    // Assuming the response format includes the URL in a similar structure as before
    // Note: Adjust the response handling based on the actual structure of OpenAI's response
    const imageUrl = imageResponse.data[0].url;
    console.log("imageUrl", imageUrl);

    // Sending both text and image URL as a response
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: error.message });
  }
});
