// ConfidenceImage.js
import React, { useState } from "react";

const ConfidenceImage = ({ audioSrc = "/typewriter.mp3" }) => {
  const [description, setDescription] = useState("");
  const [journal, setJournal] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const typingAudio = new Audio(audioSrc);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/generate-chat-and-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description }),
        }
      );
      const data = await response.json();
      console.log("get image", data.imageUrl);
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
  };

  const handleJournalChange = (e) => {
    setJournal(e.target.value);
    // Play typing sound
    typingAudio.play();
  };

  return (
    <div className="image-generator">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Cover:
            <input
              type="text"
              value={description}
              placeholder="Your image prompt"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Generate your book cover</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Generated from DALL·E" />}
      <div className="journal-container">
        <label className="journal-label">
          <textarea
            className="journal-textarea"
            value={journal}
            onChange={handleJournalChange}
            placeholder="Write your journal today..."
          />
        </label>
      </div>
    </div>
  );
};

export default ConfidenceImage;
