const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  food_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  },
  payment_mode: {
    type: String,
    enum: ['cash', 'card', 'UPI'],
    required: true,
  },
  delivery_address_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserAddress',
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
