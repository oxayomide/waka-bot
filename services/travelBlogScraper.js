const axios = require('axios');
const cheerio = require('cheerio');

const scrapeTravelBlog = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const destinations = [];
    $('.destination-item').each((index, element) => {
      const name = $(element).find('.destination-name').text();
      const activities = $(element).find('.activities').text().split(', ');
      const tips = $(element).find('.tips').text();

      destinations.push({ name, activities, tips });
    });

    return destinations;
  } catch (error) {
    console.error('Error scraping travel blog:', error);
    return [];
  }
};

module.exports = { scrapeTravelBlog };
