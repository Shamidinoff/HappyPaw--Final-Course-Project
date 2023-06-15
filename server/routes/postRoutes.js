const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//Add a new post
router.post('/newPost', async (req, res) => {
    try {
        let { postImage, createdAt, like, title, content, questions, arguments } = req.body;
        const postUnique = await Post.findOne({title});
        if (postUnique) {
          res.status(400).json({ error: 'Post already exists' });
        }

        createdAt = new Date();    

        const post = await Post.create({
          postImage,
          createdAt, 
          like,
          title,  
          content, 
          questions,  
          arguments 
        });
        
        res.status(201).json({message: 'Post created successfully', post});
    } catch (error) {
        console.error('Error creating post:', error);     
        res.status(500).json({error: 'Server error'});
    }
});

//Get all posts route
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find()
      const allPostId = posts.map(post => {
        return post._id
      })
      res.status(200).json(allPostId)
      
    } catch (error) {
      console.error('Error retrieving posts:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

//Get post by Id route 
router.get('/:postId', async (req, res) => {
    try {
      const postId = req.params.postId;
      const post = await Post.findById(postId);

      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      console.error('Error retrieving post:', error);
      res.status(500).json({ error: 'Server error' });
    }
});

 
// Update route
router.put('/:postId', async (req, res) => {
    const { postId } = req.params;
    const { postImage, createdAt, like, title, content, questions, arguments } = req.body;

    try {
      const post = await Post.findByIdAndUpdate(
        postId,
        { postImage, createdAt, like, title, content, questions, arguments },
        { new: true}
      )
 
      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      } 
      res.status(200).json({ message: 'Post updated successfully', post });
      
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: 'Server error' });
    }
}); 

// Delete route
router.delete('/:postId', async (req, res) => {
    const { postId } = req.params;
  
    try {
      const post = await Post.findByIdAndDelete(postId);
  
      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      } 
      res.status(200).json({ message: 'Post deleted successfully' });
      
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ error: 'Server error' });
    }
});  

module.exports = router;