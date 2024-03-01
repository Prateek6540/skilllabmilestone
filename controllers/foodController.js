const Food = require('../models/food');

// Controller functions
const getAllFood = async (req, res) => {
  try {
    const foodList = await Food.find();
    res.status(200).json(foodList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const foodItem = await Food.findById(id);
    if (!foodItem) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.status(200).json(foodItem);
  } catch (error) {
    console.log
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFood = async (req, res) => {
  const { food_name, description, price, image_url, category } = req.body;
  try {
    const newFood = await Food.create({
      food_name,
      description,
      price,
      image_url,
      category,
    });
    res.status(201).json(newFood);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateFood = async (req, res) => {
  const { id } = req.params;
  const { food_name, description, price, image_url, category } = req.body;
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      id,
      { food_name, description, price, image_url, category },
      { new: true }
    );
    if (!updatedFood) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFood = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllFood,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
};
