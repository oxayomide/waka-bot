const natural = require('natural');

natural.PorterStemmer.attach();

async function analyzeMessage(message) {
  const tokens = tokenizeAndStem(message);
  const intent = determineIntent(tokens);
  const entities = extractEntities(tokens, message);
  
  return { intent, entities };
}

function tokenizeAndStem(message) {
  return natural.PorterStemmer.tokenizeAndStem(message);
}

function determineIntent(tokens) {
  if (tokens.includesAny(chatbotConfig.greetings)) {
    return 'greeting';
  } else {
    return 'unknown';
  }
}

function extractEntities(tokens, message) {
  // Example entity extraction logic (for demonstration purposes)
  const entities = [];
  const entityWords = ['activities', 'destination', 'tips']; // Example entity words
  for (const word of tokens) {
    if (entityWords.includes(word)) {
      entities.push(word);
    }
  }
  return entities;
}

module.exports = { analyzeMessage };
