const express = require('express');
const Petsitter = require('../models/Petsitter');
const router = express.Router();

//Add a new petsitter
router.post('/newPetsitter', async (req, res) => {
    try {
        let { 
          createdAt,
          name,
          address,
          contact,
          experience,
          prepared,
          verified,
          desc,
          avatars,
          overstaying,
          walk, 
          rating, 
          price,
          petAccepts,
          livConditions,
          onlineTime,
          replyTime,
          petImgs,
          reviews
        } = req.body;

        const petsitUnique = await Petsitter.findOne({contact});
        if (petsitUnique) {
          res.status(400).json({ error: 'Petsitter already exists' });
        }

        createdAt = new Date();
        const petsitter = new Petsitter({ 
          createdAt,
          name,
          address,
          contact,
          experience,
          prepared,
          verified,
          desc,
          avatars,
          overstaying,
          walk,
          rating, 
          price,
          petAccepts,
          livConditions,
          onlineTime,
          replyTime,
          petImgs,
          reviews
        });
        await petsitter.save();
        res.status(201).json({message: 'Petsitter created successfully', petsitter});
    } catch (error) {
        console.error('Error creating petsitter:', error);     
        res.status(500).json({error: 'Server error'});
    }
});

//Get all petsitters route
router.get('/', async (req, res) => {
    try {
      const petsitters = await Petsitter.find();
      const allPetsitterId = petsitters.map(petsitter => {
        return petsitter._id
      })
      res.status(200).json(allPetsitterId)
    } catch (error) {
      console.error('Error retrieving petsitters:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

//Get petsitter by Id route
router.get('/:petsitterId', async (req, res) => {
    try {
      const { petsitterId } = req.params;
      const petsitter = await Petsitter.findById(petsitterId);

      if (!petsitter) {
        res.status(404).json({ error: 'Petsitter not found' });
      }
      
      res.status(200).json(petsitter);
    } catch (error) {
      console.error('Error retrieving petsitter:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

 
// Update route
router.put('/:petsitterId', async (req, res) => {
    const { petsitterId } = req.params;
    const { 
      createdAt,
      name,
      address,
      contact,
      experience,
      prepared,
      verified,
      desc,
      avatars,
      overstaying,
      walk,
      rating, 
      price,
      petAccepts,
      livConditions,
      onlineTime,
      replyTime,
      petImgs,
      reviews
    } = req.body;

    try {
      const petsitter = await Petsitter.findByIdAndUpdate(
        petsitterId,
        { 
          createdAt,
          name,
          address,
          contact,
          experience,
          prepared,
          verified,
          desc,
          avatars,
          overstaying,
          walk,
          rating, 
          price,
          petAccepts,
          livConditions,
          onlineTime,
          replyTime,
          petImgs,
          reviews
        },
        { new: true}
      )

      if (!petsitter) {
        res.status(404).json({ error: 'Petsitter not found' });
      } 
      res.status(200).json({ message: 'Petsitter updated successfully', petsitter });
      
    } catch (error) {
        console.error('Error updating petsitter:', error);
        res.status(500).json({ error: 'Server error' });
    }
}); 

// Delete route
router.delete('/:petsitterId', async (req, res) => {
    const { petsitterId } = req.params;
  
    try {
      const petsitter = await Petsitter.findByIdAndDelete(petsitterId);
  
      if (!petsitter) {
        res.status(404).json({ error: 'Petsitter not found' });
      } 
      res.status(200).json({ message: 'Petsitter deleted successfully' });
      
    } catch (error) {
      console.error('Error deleting petsitter:', error);
      res.status(500).json({ error: 'Server error' });
    }
});  

module.exports = router;