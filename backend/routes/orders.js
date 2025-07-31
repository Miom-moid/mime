// backend/routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// إرسال طلب جديد
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).send(order);
});

// جلب جميع الطلبات
router.get('/', async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.send(orders);
});

// تحديث حالة الطلب
router.patch('/:id', async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(order);
});

module.exports = router;
