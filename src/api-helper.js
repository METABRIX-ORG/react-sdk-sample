// chatWithAI.js

const rebelApiToken = "5aff6fe70d24d2c1dab55cbc4c4cf9ff8cefeb86"
const userKey = "pratik@metabrixlab.com"
const chatbotId = "21365"


export async function chatWithRebelAI(query) {
    const url = "https://app.rebelagent.ai/en/chatbot/api/v1/message/";
    

    // return {
    //     data: {
    //         answer: "Hello rebels, how can I help you today?"
    //     }
    // }
    const headers = {
      'Authorization': "Token " + rebelApiToken,  // Replace with your token
      'Content-Type': 'application/json'
    };
  
    const data = {
      chatbot_uuid: chatbotId, // Replace with actual UUID
      query: query,
      user_key: userKey,
    //   recipent_url: "https://example.com", // Adjust if needed
    //   custom_base_system_prompt: customPrompt
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        const errorMessage = result.message || `Error: ${response.status}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Chat API Error:", error.message);
      throw error;
    }
  }


  export const getTextFromAudio = async (audioBlob) => {
    try {
      // Create form data to send the audio
      const formData = new FormData();
        formData.append('file', audioBlob, 'voice.wav');


        const response = await fetch('https://api.ultronai.me/demo/transcribe', {
            method: 'POST',
            body: formData,
            headers: {
            // 'Content-Type': 'multipart/form-data' should NOT be set manually,
            // fetch will set it correctly along with the boundary.
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const transcribedText = data["Transcribed text"] || data.text || "";
        console.log(transcribedText);
      // Set the transcribed text as message
      if (transcribedText) {
        return transcribedText;
      } else {
        console.error("No transcribed text received");
        return null
      }
    } catch (error) {
      console.error("Error processing audio:", error);
      alert("Failed to process your voice message. Please try again.");
      return null
    } 
  };
  