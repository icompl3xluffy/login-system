import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// For registration
router.post('/', async (req, res) => {
  try {
    const {username, email, password} = req.body;

    const existing = await User.findOne({email});
     if (existing){
        return res.status(400).json({message: "Email Already Exist"});
     }  

     const user = await User.create(req.body)
    res.status(201).json({_id: user._id, username: user.username, email: user.email,});


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