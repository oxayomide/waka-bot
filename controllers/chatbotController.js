const { analyzeMessage } = require('../services/nlpService'); // Import NLP service
const chatbotConfig = require('../config/chatbotConfig');
const { searchLocation } = require('../services/nominatimService');
const Destination = require('../models/Destination')

// Replace the existing code with the following:
exports.handleMessage = async (req, res) => {
    const { message } = req.body;
  
    try {
      // Analyze message using NLP
      const analysisResult = await analyzeMessage(message);
  
      // Generate response based on analysis
      const reply = await generateResponse(analysisResult);
  
      res.json({ reply });
    } catch (error) {
      console.error('Error handling message:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  async function generateResponse(analysisResult) {
    const { intent, entities } = analysisResult;
  
    // Generate response based on intent and entities
    switch (intent) {
      case 'greeting':
        return 'Hello! How can I assist you today?';
      case 'activities':
        if (entities.destination) {
          const destinationName = entities.destination;
          const destination = await Destination.findOne({ name: new RegExp(destinationName, 'i') });
          if (destination) {
            return `Here are some activities in ${destination.name}: ${destination.activities.join(', ')}`;
          } else {
            return 'Destination not found.';
          }
        } else {
          return 'Please specify a destination.';
        }
      case 'tips':
        if (entities.destination) {
          const destinationName = entities.destination;
          const destination = await Destination.findOne({ name: new RegExp(destinationName, 'i') });
          if (destination) {
            return `Here are some travel tips for ${destination.name}: ${destination.tips}`;
          } else {
            return 'Destination not found.';
          }
        } else {
          return 'Please specify a destination.';
        }
      default:
        return "I'm sorry, I'm still learning to better understand and respond to messages.";
    }
  }
