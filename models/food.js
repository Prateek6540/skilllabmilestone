const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  food_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['veg', 'non-veg', 'dessert'],
    required: true,
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
