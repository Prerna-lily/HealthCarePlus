import React, { useState } from "react";

const TextToGerman = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  // Function to handle translation
  const translateToGerman = async () => {
    try {
      // Example fetch request (replace with actual API endpoint and key)
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=en|de`
      );
      const data = await response.json();

      // Access translation result
      if (data.responseData.translatedText) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        setTranslatedText("Translation failed. Try again.");
      }
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Error while translating.");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">English to German Translator</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="4"
        placeholder="Enter text in English"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={translateToGerman}
      >
        Translate
      </button>
      {translatedText && (
        <div className="mt-4 p-4 bg-white border border-gray-300 rounded">
          <h3 className="text-lg font-medium mb-2">Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextToGerman;
