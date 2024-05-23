require('dotenv').config();
const mongoose = require('mongoose');
const Destination = require('./models/Destination');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const seedData = [
  {
    name: 'Lagos',
    activities: ['beaches', 'markets', 'nightlife', 'historical sites', 'arts and crafts'],
    tips: 'Avoid traffic by traveling early in the morning. Visit the Lekki Conservation Centre for a nature walk.',
  },
  {
    name: 'Abuja',
    activities: ['hiking', 'museums', 'parks', 'cultural tours', 'shopping'],
    tips: 'Best time to visit is during the dry season. Don\'t miss the Millennium Park and the National Mosque.',
  },
  {
    name: 'Calabar',
    activities: ['wildlife', 'historical sites', 'cultural festivals', 'beaches'],
    tips: 'Visit during the Calabar Carnival in December for an unforgettable experience.',
  },
  {
    name: 'Kano',
    activities: ['markets', 'historical sites', 'cultural tours', 'museums'],
    tips: 'Experience the ancient city walls and the Gidan Makama Museum.',
  },
  {
    name: 'Enugu',
    activities: ['hiking', 'waterfalls', 'historical sites', 'nature parks'],
    tips: 'A visit to the Awhum Waterfall and Cave is highly recommended.',
  },
  {
    name: 'Jos',
    activities: ['hiking', 'rock formations', 'museums', 'wildlife parks'],
    tips: 'Explore the Jos Wildlife Park and the stunning Riyom Rock formations.',
  },
  {
    name: 'Port Harcourt',
    activities: ['beaches', 'nightlife', 'cultural tours', 'museums'],
    tips: 'Enjoy a boat ride to the Bonny Island and visit the Port Harcourt Zoo.',
  },
  {
    name: 'Ibadan',
    activities: ['historical sites', 'museums', 'botanical gardens', 'cultural tours'],
    tips: 'The University of Ibadan Zoological Garden and the Agodi Gardens are must-visit spots.',
  },
  {
    name: 'Benin City',
    activities: ['museums', 'historical sites', 'cultural tours'],
    tips: 'Don\'t miss the Benin City National Museum and the ancient Benin Moats.',
  },
  {
    name: 'Kaduna',
    activities: ['wildlife parks', 'cultural tours', 'museums', 'historical sites'],
    tips: 'Visit the Kajuru Castle and the Kamuku National Park for a unique experience.',
  },
];

const seedDB = async () => {
  await connectDB();
  await Destination.deleteMany({});
  await Destination.insertMany(seedData);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();
