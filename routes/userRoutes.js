import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// For registration
router.post('/', async (req, res) => {
  try {
    
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
});



// For Login
router.post('/', async (req, res) => {
  try {
    
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
});


export default router;