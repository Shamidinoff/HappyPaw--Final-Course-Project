const express = require('express');
const User = require('../models/User');
const router = express.Router();

//Signup route
router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;
        const userUnique = await User.findOne({ email });
        if (userUnique) {
          res.status(400).json({ error: 'User already exists' });
        }

        const user = new User({email, password});
        await user.save();
        res.status(201).json({message: 'User created successfully', user});
    } catch (error) {
        console.error('Error creating user:', error);     
        res.status(500).json({error: 'Server error'});
    }
});

//Get all users route
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

//Get user by Id route
router.get('/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error retrieving user:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }

      if (user.password !== password) {
        res.status(401).json({ error: 'Invalid password' });
      } 
      res.status(200).json({ message: 'Login successful', user });
      
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

// Update route
router.put('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { email, password } = req.body;

    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { email, password },
        { new: true}
      )

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } 
      res.status(200).json({ message: 'User updated successfully', user });
      
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
}); 

// Delete route
router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } 
      res.status(200).json({ message: 'User deleted successfully' });
      
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Server error' });
    }
}); 

module.exports = router;