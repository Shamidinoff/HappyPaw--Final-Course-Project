import React, { useEffect, useState } from 'react'
import cl from './ReviewCards.module.scss'
import axios from 'axios';
import ReviewCardsItem from '../review-card-item/ReviewCardsItem';

const ReviewCards = ({id}) => {
  const [reviewIds, setReviewIds] = useState([]);
  const [petsitReviews, setPetsitReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
  }, []);

  useEffect(() => {
    if (reviewIds.length !== 0) {
      for (let i=0; i < reviewIds.length; i++){
        getPetsitReviews(reviewIds[i]);
      }
    }
  }, [reviewIds]);

  async function getAllReviews() {
    try {
      const response = await axios.get("http://localhost:5000/api/petsitters/"+id);
      setReviewIds(response.data.reviews);
    } catch (err) {
      console.error("GET ALL REVIEWS ERROR: " + err);
    }
  }

  async function getPetsitReviews(reviewId) {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/reviews/${reviewId}`
      );
      console.log(response.data);
      setPetsitReviews((prevPetsitReviews) => [...prevPetsitReviews, response.data]);
    } catch (err) {
      console.error("GET PETSITTER REVIEW ERROR: " + err);
    }
  }

  
  const reviewCardsItems = petsitReviews.map((review) => {
    const options = {  day: 'numeric', month: 'long', year: 'numeric'}
    const dateForm = new Date(review.createdAt).toLocaleString("ru", options).split(" ");
    const date = dateForm[0] + " " + dateForm[1].charAt(0).toUpperCase() + dateForm[1].slice(1) + ", " + dateForm[2];
        
      return (
        <ReviewCardsItem
          userName={review.userName}
          createdAt={date}
          star={review.star}
          comment={review.comment}
          avatar={review.avatar}
          reviewId={review._id}
        />
      );
  });

      return (
        <div className="views_wrapper">
            {reviewCardsItems}
        </div>

      );
  }
  
  export default ReviewCards