const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Get all food items
router.get('/food', foodController.getAllFood);

// Get a specific food item by ID
router.get('/food/:id', foodController.getFoodById);

// Create a new food item
router.post('/food', foodController.createFood);

// Update a food item by ID
router.put('/food/:id', foodController.updateFood);

// Delete a food item by ID
router.delete('/food/:id', foodController.deleteFood);

module.exports = router;
