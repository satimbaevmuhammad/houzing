const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  id: Number,
  userId: String,
  name: String,
  img: String,
  date: String,
  rating: Number,
  reviewsCount: Number,
  comment: String,
  scores: {
    cleanliness: Number,
    communication: Number,
    checkin: Number,
    accuracy: Number,
    location: Number,
    value: Number
  }
});

const scheduleTourSchema = new mongoose.Schema({
  id: Number,
  date: String,
  time: String,
  name: String,
  phone: String,
  email: String,
  massage: String
});

const houseSchema = new mongoose.Schema({
  images: [String],
  title: String,
  aboutHouse: {
    furniture: Number,
    baths: Number,
    garage: Number,
    sotix: Number,
    yearBuilt: Number
  },
  description: String,
  document: {
    document2: String,
    document3: String,
    document4: String
  },
  location: {
    lat: Number,
    lon: Number,
    address: String,
    state: String,
    city: String,
    zip: String,
    area: String,
    country: String
  },
  propertyDetails: {
    PropertyID: String,
    price: String,
    oldprise: String,
    propertySize: String,
    yearBuilt: String,
    bedrooms: Number,
    bathrooms: Number,
    garage: Number,
    garageSize: String,
    propertyType: String,
    propertyStatus: String
  },
  features: {
    airCondition: Boolean,
    barbeque: Boolean,
    dryer: Boolean,
    gym: Boolean,
    lawn: Boolean,
    laundry: Boolean,
    microwave: Boolean,
    outdoorShower: Boolean,
    refrigerator: Boolean,
    kitchen: Boolean,
    swimmingPool: Boolean,
    tvCable: Boolean,
    water: Boolean,
    wifi: Boolean,
    windowCoverings: Boolean,
    diningRoom: Boolean
  },
  comments: [commentSchema],
  ScheduleTour: [scheduleTourSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('House', houseSchema);
