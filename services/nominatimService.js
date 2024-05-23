const axios = require('axios');

const searchLocation = async (query) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
};

module.exports = { searchLocation };
