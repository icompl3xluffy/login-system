import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// For registration
router.post('/register', async (req, res) => {
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
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }
    
    const correct = await user.isCorrectPassword(password);
    if (!correct) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }
    
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
});


export default router;