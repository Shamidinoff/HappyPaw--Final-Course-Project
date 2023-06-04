const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

//Add a new review
router.post('/newReview', async (req, res) => {
    try {
        let { createdAt, userName, star, comment, userId } = req.body;
        const reviewUnique = await Review.findOne({comment});
        if (reviewUnique) {
          res.status(400).json({ error: 'Review already exists' });
        }
      
        createdAt = new Date().toLocaleDateString();     

        const review = await Review.create({
          createdAt, 
          userName, 
          star, 
          comment, 
          userId 
        });
        res.status(201).json({message: 'Review created successfully', review});
    } catch (error) {
        console.error('Error creating review:', error);     
        res.status(500).json({error: 'Server error'});
    }
});

//Get all reviews route
router.get('/', async (req, res) => {
    try {
      const reviews = await Review.find();
      const allreviewId = reviews.map(review => {
        return review._id
      })
      res.status(200).json(allreviewId)
    } catch (error) {
      console.error('Error retrieving reviews:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

//Get review by Id route
router.get('/:reviewId', async (req, res) => {
    try {
      const { reviewId } = req.params;
      const review = await Review.findById(reviewId);

      if (!review) {
        res.status(404).json({ error: 'Review not found' });
      }
      
      res.status(200).json(review);
    } catch (error) {
      console.error('Error retrieving review:', error);
      res.status(500).json({ error: 'Server error' });
    }
}); 

 
// Update route
router.put('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    const { createdAt, userName, star, comment, userId } = req.body;

    try {
      const review = await Review.findByIdAndUpdate(
        reviewId,
        { createdAt, userName, star, comment, userId },
        { new: true}
      )

      if (!review) {
        res.status(404).json({ error: 'Review not found' });
      } 
      res.status(200).json({ message: 'Review updated successfully', review });
      
    } catch (error) {
        console.error('Error updating review:', error);
        res.status(500).json({ error: 'Server error' });
    }
}); 

// Delete route
router.delete('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
  
    try {
      const review = await Review.findByIdAndDelete(reviewId);
  
      if (!review) {
        res.status(404).json({ error: 'Review not found' });
      } 
      res.status(200).json({ message: 'Review deleted successfully' });
      
    } catch (error) {
      console.error('Error deleting review:', error);
      res.status(500).json({ error: 'Server error' });
    }
});  

module.exports = router;